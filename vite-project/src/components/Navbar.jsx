import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Heading, Button } from '@chakra-ui/react'
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
        <Flex gap='20px'>
          {/* TODO: fix text only turning black when hover over link and not button */}
          <Button variant='ghost'>
            <Link
              as={RouterLink}
              to='/'
              _hover={{ textDecor: 'none', color: 'black' }}
              color='white'
            >
              Sign Up
            </Link>
          </Button>
          <Button variant='solid'>
            <Link as={RouterLink} to='/about' _hover={{ textDecor: 'none' }}>
              About
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
