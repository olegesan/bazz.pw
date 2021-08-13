import React from "react";
import {
  Text,
  Heading,
  Flex,
  Box,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Date from "./date";
import ProjectModal from "./projectModal";

type Props = {
  project: {
    image: string;
    title: string;
    date: string;
    stack: string;
    description: string;
  };
};
export default function ProjectBox({ project }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      size={["xs", "", "xs"]}
      onClick={onOpen}
      marginBottom={"2"}
      margin={["2", "5"]}
      border="1px black solid"
    >
      <Image
        h="75%"
        objectFit="cover"
        src={require(`../images/${project.image}.png`)}
      />
      <Heading>{project.title}</Heading>
      <Date>{project.date}</Date>
      <ProjectModal
        // onClick={onOpen}
        isOpen={isOpen}
        // onOpen={onOpen}
        onClose={onClose}
        project={project}
      />
    </Box>
  );
}
