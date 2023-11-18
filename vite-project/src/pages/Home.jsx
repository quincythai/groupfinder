import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box
      maxW='32rem'
      mx='auto'
      my='auto'
      textAlign='center'
      h='80vh' // Set the height of the box to 100% of the viewport height
      display='flex'
      flexDirection='column'
      justifyContent='center' // Center the content vertically
    >
      <Heading mb={4}>
        <Logo />
      </Heading>
      <Text fontSize='xl'>Want to find a group for your school projects?</Text>
      <Button size='lg' colorScheme='green' mt='24px'>
        Find a Group
      </Button>
    </Box>
  )
}

export default Home
