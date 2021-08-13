import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  stack: string;
};

export default function Stack({ stack }: Props) {
  return <Box fontWeight="500">Stack: {stack}</Box>;
}
