import React from "react";
import { Text } from "@chakra-ui/react";
import Stack from "./stack";
import Date from "./date";
export default function ProjectInfo({ children, stack, date }) {
  return (
    <Text marginBottom="2">
      <Date date={date} />
      <Stack stack={stack} />
    </Text>
  );
}
