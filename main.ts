import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-line office joke, written for the Make the AI Judge Laugh bounty.
// The joke lives here as a single string so the output is deterministic.
const JOKE =
  "HR sent a survey about burnout, but the link kept crashing — which, honestly, felt like the most accurate answer anyone could give.";

// Resolve the repository directory from this script's own location,
// never from the working directory.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
