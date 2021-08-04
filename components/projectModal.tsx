import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function ProjectModal({
  children,
  project,
  isOpen,
  onClose,
  onOpen,
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isOpen, onOpen, onClose);
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
