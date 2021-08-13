import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export default function Description({ children }: Props) {
  return <Text>{children}</Text>;
}
