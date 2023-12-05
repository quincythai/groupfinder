import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Logo from '../components/Logo'
import { Image, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user.name)
  return (
    <Box
      textAlign='center'
      h='60vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box display='flex' alignItems='center' gap='100px'>
        <Box display='flex' flexDirection='column'>
          <Heading mb='4' fontSize='80px'>
            <Logo />
          </Heading>
          <Text fontSize='22px' color={'gray'}>
            Want to find a group for your school projects?
          </Text>
          <Link as={RouterLink} to='/courses'>
            <Button
              size='lg'
              colorScheme='green'
              width='60%'
              mt='8'
              alignSelf='center'
              onClick={isAuthenticated ? () => console.log('Redirecting') : () => loginWithRedirect()}
            >
              Find a Group
            </Button>
          </Link>
        </Box>
        <Image
          src='group-svgrepo-com.svg'
          objectFit='cover'
          alt='Group of people clipart'
          boxSize='300px'
        ></Image>
      </Box>
    </Box>
  )
}

export default Home
