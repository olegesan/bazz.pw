import { GetStaticPaths, GetStaticProps, GetStaticPathsResult } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getFileByslug, getFiles } from "../../utils/mdx";
import { ParsedUrlQuery } from "querystring";
import matter from "gray-matter";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: any;
}

export default function ExamplePage({ mdxSource }: Props) {
  return (
    <>
      <h1>help </h1>hello world too
      <MDXRemote {...mdxSource} />
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("blog");
  console.log(posts);
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const params = context.params!;
  const postFileData = await getFileByslug("blog", params.slug);
  const { content, data } = matter(postFileData);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};
