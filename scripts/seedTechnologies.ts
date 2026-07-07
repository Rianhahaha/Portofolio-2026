// scripts/seedTechnologies.ts
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { SKILLS_DATA } from "../src/data/SkillsData";

async function seedTechnologies() {
  const payload = await getPayload({ config: configPromise });

  // Dedupe by techId — SKILLS_DATA has duplicate entries (ibispaintx, figma, corel)
  const uniqueSkills = Array.from(
    new Map(SKILLS_DATA.map((skill) => [skill.id, skill])).values(),
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const skill of uniqueSkills) {
    try {
      const existing = await payload.find({
        collection: "technologies",
        where: { techId: { equals: skill.id } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        skipped++;
        console.log(`SKIP  ${skill.id} (already exists)`);
        continue;
      }

      await payload.create({
        collection: "technologies",
        data: {
          name: skill.title,
          techId: skill.id,
          // img intentionally left empty per request
        },
      });

      created++;
      console.log(`OK    ${skill.id}`);
    } catch (err) {
      failed++;
      console.error(
        `FAIL  ${skill.id}:`,
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
