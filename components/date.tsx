import React from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  date?: string;
  marginBottom?: string;
};

export default function Date({ children, date, marginBottom }: Props) {
  return (
    <Text
      fontWeight={["500"]}
      fontSize={["sm", "md", "md"]}
      marginBottom={marginBottom}
    >
      {date}
    </Text>
  );
}
