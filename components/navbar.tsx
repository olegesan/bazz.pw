import { Flex, Link as Lnk, Text, Box, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import ColorModeButton from "./coloModeButton";

export default function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justifyContent="center"
      position="fixed"
      top="0"
      right="0"
      width="100%"
      bg={colorMode === "light" ? "light.bg" : "dark.bg"}
      color={colorMode === "light" ? "light.font" : "dark.font"}
      zIndex="2"
    >
      <Flex justifyContent="space-between" w="50%" m="5">
        <Flex alignItems="center" justifyContent="space-around" width="35%">
          <Link href="/blog">
            <Lnk>
              <Text>Blog</Text>
            </Lnk>
          </Link>
          <Link href="/resume">
            <Lnk>
              <Text>Resume</Text>
            </Lnk>
          </Link>
          <Link href="/">
            <Lnk>
              <Text>Main</Text>
            </Lnk>
          </Link>
        </Flex>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
