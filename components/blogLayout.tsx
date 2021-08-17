import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function BlogLayout({ children }: Props) {
  return (
    <Flex mt="20" mb="20" justifyContent="space-around">
      <Box w="75%">
        <p>How does this look</p>
        {children}
      </Box>
    </Flex>
  );
}
