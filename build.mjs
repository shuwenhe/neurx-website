import { mkdir, copyFile, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");
const files = ["index.html", "styles.css", "main.js"];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const file of files) {
  await copyFile(path.join(root, file), path.join(outDir, file));
}

console.log(`Built ${files.length} files into ${outDir}`);
