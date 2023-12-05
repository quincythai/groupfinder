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
const CreateClass = (props) => {

    return(
        <Modal isOpen={props.isOpen} onClose={props.onClose} >
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Create Group</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
          <Text>Class Name:</Text>
            <Input
              onChange={props.onChangeTitle}
              placeholder='class name'
            />
          <Text>Class Description:</Text>
            <Input
              onChange={props.onChangeDesc}
              placeholder='class Desc'
            />

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' onClick={props.onClick}>
              Create
            </Button>
          </ModalFooter>

        </ModalContent>          
      </Modal>
    )
}

export default CreateClass