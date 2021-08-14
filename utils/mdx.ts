import fs from "fs";
import path from "path";

export function getFiles(type: string) {
  return fs.readdirSync(path.join(process.cwd(), "data", type), "utf-8");
}

export function getFileByslug(type: string, slug: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf-8"
  );
}
