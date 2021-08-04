import React from "react";
import { render } from "react-dom";
import { Flex, IconButton, Box } from "@chakra-ui/react";
import Icon from "./icon";
import { ImGithub, ImLinkedin, ImMail } from "react-icons/im";

export default function Header(props) {
  return (
    <Flex
      position="sticky"
      flexWrap="nowrap"
      zIndex="2"
      top="0px"
      display={props.display || ["block", "none"]}
      bg="gray.50"
      paddingY="2"
    >
      <Flex flexDir="row" justify="space-around" flexGrow="2">
        <Icon as={ImGithub} href="https://github.com/olegesan" />
        <Icon
          as={ImLinkedin}
          href="https://www.linkedin.com/in/oleg-bazylnikov/"
        />
        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com" />
      </Flex>
      <Box>
        <IconButton icon="arrow-up" bg="none" size="sm" />
      </Box>
    </Flex>
  );
}
