import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Heading } from '@chakra-ui/react'
import Logo from './Logo'

import { useTheme } from '@chakra-ui/react'

const Navbar = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]

  return (
    <Box as='nav' p={4} bg={primaryColor} color='white'>
      <Flex justify='space-between' align='center'>
        <Heading as='span' size='md' style={{ fontSize: '30px' }}>
          <Logo />
        </Heading>
        <Flex>
          <Link as={RouterLink} to='/' mr={4} _hover={{ textDecor: 'none' }}>
            Home
          </Link>
          <Link as={RouterLink} to='/about' _hover={{ textDecor: 'none' }}>
            About
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
