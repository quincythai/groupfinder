import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Logo from './Logo'
import {
  Card,
  Button,
  Flex,
  Box,
  Link,
  Heading,
  useTheme,
} from '@chakra-ui/react'
import HandleLoginButtion from './HandleLoginButton'

const Navbar = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]
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
            <Link as={RouterLink} to='/courses'>
              <HandleLoginButtion />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Navbar
