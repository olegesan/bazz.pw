import React from "react";
import {
  Heading,
  Flex,
  Box,
  useColorMode,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function BuletPoints({ children }) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.700" };
  const color = { light: "gray.700", dark: "gray.50" };
  return (
    <List styleType="disc">
      {children.map((point, idx) => {
        return <ListItem key={idx}> {point}</ListItem>;
      })}
    </List>
  );
}
