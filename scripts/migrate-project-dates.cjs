// One-off migration: projects.year (numeric) -> subtitle/startDate/endDate/dateType + affiliations rel.
// Run: node scripts/migrate-project-dates.cjs
// Safe to re-run (idempotent guards). Drops the _backup table at the end after
// exporting a local JSON backup (extra tables would confuse future drizzle pushes).
const fs = require('fs');
const path = require('path');

const ROOT = 'F:/BLAJAR/Portofolio-2025/portofolio-2025';
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8').split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => {
      const i = l.indexOf('=');
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

async function main() {
  const { Client } = require(ROOT + '/node_modules/pg');
  const c = new Client({ connectionString: env.DATABASE_URL });
  await c.connect();
  try {
    await c.query('BEGIN');

    // 0. Backup year values (local JSON copy too)
    await c.query(
      'CREATE TABLE IF NOT EXISTS _backup_projects_year AS SELECT id, slug, title, "year" FROM projects',
    );
    const backup = await c.query('SELECT id, slug, title, "year" FROM _backup_projects_year ORDER BY id');
    fs.writeFileSync(
      'C:/Users/ASUS/AppData/Local/Temp/opencode/projects-year-backup.json',
      JSON.stringify(backup.rows, null, 2),
    );
    console.log('backup rows: ' + backup.rows.length);

    // 1. Enum for dateType select (mirrors enum_projects_status convention)
    await c.query(
      "DO $$ BEGIN CREATE TYPE enum_projects_date_type AS ENUM('year', 'year-month', 'full'); EXCEPTION WHEN duplicate_object THEN NULL; END $$",
    );

    // 2. New columns on projects (nullable first so backfill can run)
    await c.query('ALTER TABLE projects ADD COLUMN IF NOT EXISTS subtitle varchar');
    await c.query('ALTER TABLE projects ADD COLUMN IF NOT EXISTS date_type enum_projects_date_type');
    await c.query('ALTER TABLE projects ADD COLUMN IF NOT EXISTS start_date timestamptz');
    await c.query('ALTER TABLE projects ADD COLUMN IF NOT EXISTS end_date timestamptz');

    // 3. affiliations rel column + FK (mirrors projects_rels_project_type_fk)
    await c.query('ALTER TABLE projects_rels ADD COLUMN IF NOT EXISTS affiliation_id integer');
    await c.query(
      'DO $$ BEGIN ALTER TABLE projects_rels ADD CONSTRAINT projects_rels_affiliation_fk FOREIGN KEY (affiliation_id) REFERENCES affiliation(id) ON DELETE CASCADE; EXCEPTION WHEN duplicate_object THEN NULL; END $$',
    );

    // 4. Backfill start_date/date_type from legacy year (Jan 1, UTC, granularity = year)
    const upd = await c.query(
      `UPDATE projects SET start_date = make_timestamptz("year"::int, 1, 1, 0, 0, 0, 'UTC'), date_type = 'year'
       WHERE start_date IS NULL AND "year" IS NOT NULL`,
    );
    console.log('backfilled rows: ' + upd.rowCount);

    // 5. Verify no NULLs remain before enforcing NOT NULL (both are required in collection config)
    const nulls = await c.query(
      'SELECT id, slug FROM projects WHERE start_date IS NULL OR date_type IS NULL',
    );
    if (nulls.rows.length > 0) {
      throw new Error('NULLs remain after backfill: ' + JSON.stringify(nulls.rows));
    }
    await c.query('ALTER TABLE projects ALTER COLUMN date_type SET NOT NULL');
    await c.query('ALTER TABLE projects ALTER COLUMN start_date SET NOT NULL');

    // 6. Drop deprecated year column (data preserved in start_date + backup)
    await c.query('ALTER TABLE projects DROP COLUMN IF EXISTS "year"');

    // 7. Drop backup table (extra tables confuse future drizzle pushes; JSON backup kept on disk)
    await c.query('DROP TABLE IF EXISTS _backup_projects_year');

    await c.query('COMMIT');
    console.log('MIGRATION OK');

    // Post-commit verification
    const cols = await c.query(
      "SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name='projects' ORDER BY ordinal_position",
    );
    console.log('projects cols: ' + JSON.stringify(cols.rows.map((r) => r.column_name)));
    const rels = await c.query(
      "SELECT column_name FROM information_schema.columns WHERE table_name='projects_rels' ORDER BY ordinal_position",
    );
    console.log('rels cols: ' + JSON.stringify(rels.rows.map((r) => r.column_name)));
    const data = await c.query(
      "SELECT slug, date_type, start_date, end_date FROM projects ORDER BY id",
    );
    console.log('data: ' + JSON.stringify(data.rows));
  } catch (e) {
    await c.query('ROLLBACK');
    console.error('MIGRATION FAILED, rolled back: ' + e.message);
    process.exitCode = 1;
  } finally {
    await c.end();
  }
}

main();
