import React from "react";
import {
  Flex,
  Box,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { useEffect } from "react";

// import Seo from "./seo";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("#F7FAFC", "#2D3748");
  const color = useColorModeValue("#F7FAFC", "#2D3748");
  const styled = css`
    html: {
      background-color: ${colorMode == "light" ? "#F7FAFC" : "#2D3748"};
    }
  `;

  return (
    <Box>
      {/* <Seo /> */}

      <Flex flexDir={["column", "column", "row"]} bg={bgColor} color={color}>
        {children}
      </Flex>
    </Box>
  );
}
