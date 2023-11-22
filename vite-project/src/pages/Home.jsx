import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Logo from '../components/Logo'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Box
      maxW='70%'
      mx='auto'
      my='auto'
      textAlign='center'
      h='100vh' // Set the height of the box to 100% of the viewport height
      display='flex'
      flexDirection='column'
      justifyContent='center' // Center the content vertically
    >
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box display='flex' flexDirection='column' maxWidth='60%'>
          <Heading mb='4' fontSize='80px'>
            <Logo />
          </Heading>
          <Text fontSize='22px' color={'gray'}>
            Want to find a group for your school projects?
          </Text>
          <Link to='/courses'>
            <Button
              size='lg'
              colorScheme='green'
              width='60%'
              mt='8'
              alignSelf='center'
            >
              Find a Group
            </Button>
          </Link>
        </Box>
        <Image
          src='group-svgrepo-com.svg'
          objectFit='cover'
          alt='Group of people clipart'
          boxSize='250px'
        ></Image>
      </Box>
    </Box>
  )
}

export default Home
