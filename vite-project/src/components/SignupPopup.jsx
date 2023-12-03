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

const signupPopup = (props) => { //props.onClose, props.isOpen, props.onClick, props.isShown

    return(
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>
            Sign up
          </ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <Text>Email</Text>
            <Input
              placeholder=''
              onChange = {(event) => setuserName}
            />
            <Text>Username</Text>
            <Input
              placeholder=''
              onChange = {(event) => setuserName}
            />
            <Text>Password</Text>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={props.isShown ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={props.onClick}>
                  {props.isShown ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
  
            <Text>Re-enter Password</Text>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={props.isShown ? 'text' : 'password'}
                placeholder='Enter password'
              />
            </InputGroup>
            
          </ModalBody>
          <ModalFooter display='flex' justifyContent='center'>
              <Button>
                Create Account
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default signupPopup