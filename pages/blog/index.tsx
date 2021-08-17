import React from "react";
import BlogLayout from "../../components/blogLayout";
import { GetStaticProps } from "next";
import { getAllBlogPosts } from "../../utils/mdx";
import Link from "next/link";
import { Box, Heading, Text, Link as Lnk } from "@chakra-ui/react";

interface post {
  content: string;
  data: {
    title: string;
    slug: string;
    summary: string;
    publishedAt: string;
  };
}
type Props = {
  posts: post[];
};

type BlogCardProps = {
  children?: React.ReactNode;
  post: post;
};
const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Box mt="3" mb="5">
      <Link passHref={true} href={`/blog/${post.data.slug}`}>
        <Lnk>
          <Heading size="xl">{post.data.title}</Heading>
        </Lnk>
      </Link>
      <Text>{post.data.summary}</Text>
    </Box>
  );
};

const Blogs = ({ posts }: Props) => {
  return (
    <BlogLayout>
      {posts.map((post, idx) => {
        return <BlogCard post={post} key={idx} />;
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
