import { Flex, Link as Lnk, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <Flex mt="5" justifyContent="space-between">
      <Flex>
        <Link href="/blog">
          <Lnk p="5">
            <Text>Blog</Text>
          </Lnk>
        </Link>
        <Link href="/resume">
          <Lnk p="5">
            <Text>Resume</Text>
          </Lnk>
        </Link>
        <Link href="/about">
          <Lnk p="5">
            <Text>About</Text>
          </Lnk>
        </Link>
      </Flex>
    </Flex>
  );
}
