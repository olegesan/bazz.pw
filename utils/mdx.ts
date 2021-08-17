import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getFiles(type: string) {
  return fs.readdirSync(path.join(process.cwd(), "data", type), "utf-8");
}

export function getFileByslug(type: string, slug: string) {
  return fs.readFileSync(
    path.join(process.cwd(), "data", type, `${slug}.mdx`),
    "utf-8"
  );
}

export function getAllBlogPosts() {
  const slugs = getFiles("blog");
  const allPosts = slugs.map((slug) => {
    slug = slug.replace(".mdx", "");
    const { content, data } = matter(getFileByslug("blog", slug));
    // console.log(data);
    return {
      content,
      data: { slug, ...data },
    };
  });
  return allPosts;
}
