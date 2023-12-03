import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Card,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Box, 
  Link, 
  Heading,
  useTheme,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'



const LoginPopup = (props) => {

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>
            Login
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text>Email or Username</Text>
            <Input
              placeholder=''
              onChange = {(event) => setuserName}
            />
            <Text>Password</Text>
            <Input 
              placeholder=''
  
            />
          </ModalBody>
          <ModalFooter display='flex' justifyContent='center'>
              <Button>
                LOGIN
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default LoginPopup