import { mkdir, copyFile, rm, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");
const files = ["index.html", "styles.css", "main.js", "logo.jpg"];
const hostingPath = path.join(root, ".openai", "hosting.json");
const serverDir = path.join(outDir, "server");
const openAiDir = path.join(outDir, ".openai");
const [indexHtml, stylesCss, mainJs, hostingJson] = await Promise.all([
  readFile(path.join(root, "index.html"), "utf8"),
  readFile(path.join(root, "styles.css"), "utf8"),
  readFile(path.join(root, "main.js"), "utf8"),
  readFile(hostingPath, "utf8"),
]);
const serverEntry = `const assets = new Map([
  ["/", ${JSON.stringify(indexHtml)}],
  ["/index.html", ${JSON.stringify(indexHtml)}],
  ["/styles.css", ${JSON.stringify(stylesCss)}],
  ["/main.js", ${JSON.stringify(mainJs)}],
  ["/.openai/hosting.json", ${JSON.stringify(hostingJson)}],
]);

const contentTypes = new Map([
  ["/", "text/html; charset=utf-8"],
  ["/index.html", "text/html; charset=utf-8"],
  ["/styles.css", "text/css; charset=utf-8"],
  ["/main.js", "application/javascript; charset=utf-8"],
  ["/.openai/hosting.json", "application/json; charset=utf-8"],
]);

export default {
  async fetch(request) {
    const pathname = new URL(request.url).pathname;
    const key = assets.has(pathname) ? pathname : "/";
    const body = assets.get(key);

    if (body == null) {
      return new Response("Not Found", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": contentTypes.get(key) || "application/octet-stream",
        "Cache-Control": "public, max-age=300",
      },
    });
  },
};
`;

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await mkdir(serverDir, { recursive: true });
await mkdir(openAiDir, { recursive: true });

for (const file of files) {
  await copyFile(path.join(root, file), path.join(outDir, file));
}

await copyFile(hostingPath, path.join(openAiDir, "hosting.json"));
await writeFile(path.join(serverDir, "index.js"), serverEntry);

console.log(`Built ${files.length} files into ${outDir}`);
