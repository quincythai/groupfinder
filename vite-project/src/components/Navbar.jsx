import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Logo from './Logo'
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
  useTheme
} from '@chakra-ui/react'



const Navbar = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () =>{
    setIsOpen(false)
  }


  return (
    <>
    <Box as='nav' p={4} bg={primaryColor} color='white'>
      <Flex justify='space-between' align='center'>
        <Link as={RouterLink} to='/' _hover={{ textDecoration: 'none' }}>
          <Heading as='span' size='md' style={{ fontSize: '30px' }}>
            <Logo />
          </Heading>
        </Link>
        <Flex gap='20px' justifyContent='center' alignItems='center'>
          <Link as={RouterLink} to='/'>
            <Button
              color='white'
              variant='link' // Change the variant to 'solid'
              bgColor='transparent' // Set a transparent background color (optional)
              _hover={{ transform: 'scale(1.03)' }}
              _active={{ opacity: '60%' }}
            >
              Sign Up
            </Button>
          </Link>
          <Link as={RouterLink} to='/' _hover={{ textDecor: 'none' }}>
            <Button variant='solid' onClick = {handleOpenModal}>Login</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>

    <Modal isOpen={isOpen} onClose={handleCloseModal}>
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

        </ModalBody>
      </ModalContent>
    </Modal>
    
    </>
  )




}

export default Navbar
