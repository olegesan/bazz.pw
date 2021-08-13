import React from "react";
import { Heading, Flex, Box, useColorMode } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export default function Section({ children, title }: Props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.700" };
  const color = { light: "gray.700", dark: "gray.50" };
  return (
    <Flex
      flexDir={["column"]}
      margin={["6", "16"]}
      color={color[colorMode]}
      bg={bgColor[colorMode]}
    >
      <Heading textAlign="center" marginBottom={["2"]}>
        {title}
      </Heading>
      <Box>{children}</Box>
    </Flex>
  );
}
