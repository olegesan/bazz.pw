import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function Location({ children }: Props) {
  return <Text marginLeft={["", "", "3"]}>{children}</Text>;
}
