import { mkdir, copyFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "dist");
const files = ["index.html", "styles.css", "main.js"];
const hostingPath = path.join(root, ".openai", "hosting.json");
const serverDir = path.join(outDir, "server");
const openAiDir = path.join(outDir, ".openai");
const serverEntry = `const http = require("node:http");
const { readFile } = require("node:fs/promises");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 3000);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
]);

function resolveRequestUrl(url) {
  const clean = new URL(url, "http://localhost").pathname;
  return clean === "/" ? "/index.html" : clean;
}

const server = http.createServer(async (req, res) => {
  try {
    const requestPath = resolveRequestUrl(req.url || "/");
    const filePath = path.join(rootDir, requestPath);
    const data = await readFile(filePath);
    const ext = path.extname(filePath);
    res.statusCode = 200;
    res.setHeader("Content-Type", contentTypes.get(ext) || "application/octet-stream");
    res.end(data);
  } catch {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(\`NeurX static site listening on \${port}\`);
});
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
