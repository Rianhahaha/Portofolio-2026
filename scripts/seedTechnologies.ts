// scripts/seedTechnologies.ts
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { SKILLS_DATA } from "../src/data/SkillsData";

async function seedTechnologies() {
  const payload = await getPayload({ config: configPromise });

  // Dedupe by techId — SKILLS_DATA has duplicate entries (ibispaintx, figma, corel)
  const uniqueTechnologies = Array.from(
    new Map(SKILLS_DATA.map((technology) => [technology.id, technology])).values(),
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const technology of uniqueTechnologies) {
    try {
      const existing = await payload.find({
        collection: "technologies",
        where: { techId: { equals: technology.id } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        skipped++;
        console.log(`SKIP  ${technology.id} (already exists)`);
        continue;
      }

      await payload.create({
        collection: "technologies",
        data: {
          name: technology.title,
          techId: technology.id,
          // img intentionally left empty per request
        },
      });

      created++;
      console.log(`OK    ${technology.id}`);
    } catch (err) {
      failed++;
      console.error(
        `FAIL  ${technology.id}:`,
        err instanceof Error ? err.message : err,
      );
    }
  }

  console.log(
    `\nDone. Created: ${created}, Skipped: ${skipped}, Failed: ${failed}`,
  );
  process.exit(failed > 0 ? 1 : 0);
}

seedTechnologies();
