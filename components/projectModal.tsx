import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
type Props = {
  project: {
    image: string;
    title: string;
    date: string;
    stack: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
};
export default function ProjectModal({ project, isOpen, onClose }: Props) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Modal
        isOpen={isOpen}
        blockScrollOnMount={false}
        size={"sm"}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>{project.title}</Heading>
            <Text>{project.description}</Text>
            <Image src={require(`../images/${project.image}.png`)} />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
