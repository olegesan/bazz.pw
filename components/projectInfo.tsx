import React from "react";
import { Text } from "@chakra-ui/react";
import Stack from "./stack";
import Date from "./date";

type Props = {
  stack: string;
  date: string;
};
export default function ProjectInfo({ stack, date }: Props) {
  return (
    <Text marginBottom="2">
      <Date date={date} />
      <Stack stack={stack} />
    </Text>
  );
}
