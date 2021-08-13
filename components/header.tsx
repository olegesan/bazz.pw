import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import Icon from "./icon";
import { ImGithub, ImLinkedin, ImMail } from "react-icons/im";

type Props = {
  display?: string[];
};

export default function Header(props: Props) {
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
      <Flex flexDir="row" justify="space-around" grow={2}>
        <Icon as={ImGithub} href="https://github.com/olegesan" />
        <Icon
          as={ImLinkedin}
          href="https://www.linkedin.com/in/oleg-bazylnikov/"
        />
        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com" />
      </Flex>
      <Box>
        <ArrowUpIcon />
      </Box>
    </Flex>
  );
}
