import React from "react";
import BlogLayout from "../../components/blogLayout";
import { GetStaticProps } from "next";
import { getAllBlogPosts } from "../../utils/mdx";
import Link from "next/link";
import { Box, Heading, Text, Link as Lnk } from "@chakra-ui/react";

type Props = {
  posts: {
    content: string;
    data: {
      title: string;
      slug: string;
      summary: string;
      publishedAt: string;
    };
  }[];
};
const Blogs = ({ posts }: Props) => {
  return (
    <BlogLayout>
      {posts.map((post, idx) => {
        return (
          <Box key={idx}>
            <Link passHref={true} href={`/blog/${post.data.slug}`}>
              <Lnk>
                <Heading size="xl">{post.data.title}</Heading>
              </Lnk>
            </Link>
            <Text>{post.data.summary}</Text>
          </Box>
        );
      })}
    </BlogLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllBlogPosts();
  return {
    props: { posts },
  };
};
export default Blogs;
