import React from "react";
import { Box } from "@chakra-ui/react";

export default function Stack({ children, stack }) {
  return <Box fontWeight="500">Stack: {stack}</Box>;
}
