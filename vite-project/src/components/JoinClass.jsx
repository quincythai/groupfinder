import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
    Flex,
    Heading,
    Card,
    Box,
    Image,
    Stack,
    CardBody,
    Text,
    Link,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Textarea
  } from '@chakra-ui/react'
const JoinClass = (props) => {


    return(
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Join Group</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text>Enter Class Name:</Text>
            <Input
              onChange={props.onChange}
              placeholder='class name'
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' onClick={props.onClick}>
              Join
            </Button>
          </ModalFooter>

        </ModalContent>          
      </Modal>
    )
}

export default JoinClass