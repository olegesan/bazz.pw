import React, { FunctionComponent } from "react";
import {
  Heading,
  Flex,
  Box,
  useColorMode,
  List,
  ListItem,
} from "@chakra-ui/react";

type Props = {
  children?: string[];
};

const BuletPoints: FunctionComponent<Props> = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.700" };
  const color = { light: "gray.700", dark: "gray.50" };
  return (
    <List styleType="disc">
      {React.Children.map(props.children, (child, index) => {
        return <ListItem key={index}> {child?.toString()}</ListItem>;
      })}
    </List>
  );
};

export default BuletPoints;
