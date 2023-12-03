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
  useTheme,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import LoginPopup from './LoginPopup'
import SignupPopup from './SignupPopup'


const Navbar = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]

  const [isSignupOpen, setSignupOpen] = useState(false)
  const [isLoginOpen, setLoginOpen] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleOpenLogin = () => {
    setLoginOpen(true)
  }

  const handleCloseLogin = () =>{
    setLoginOpen(false)
  }

  const handleOpenSignup = () => {
    setSignupOpen(true)
  }

  const handleCloseSignup = () =>{
    setSignupOpen(false)
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
              onClick = {handleOpenSignup}
            >
              Sign Up
            </Button>
          </Link>
          <Link as={RouterLink} to='/' _hover={{ textDecor: 'none' }}>
            <Button variant='solid' onClick = {handleOpenLogin}>Login</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>

    <LoginPopup isOpen={isLoginOpen} onClose={handleCloseLogin}/>
    
    <SignupPopup onClose={handleCloseSignup} isOpen={isSignupOpen} onClick={handleShowPassword} isShown={showPassword}/>


    </>
  )




}

export default Navbar
