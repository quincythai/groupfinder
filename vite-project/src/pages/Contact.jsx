import { Flex } from '@chakra-ui/react'
import ContactBox from '../components/ContactBox'

const Contact = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minH='70vh'
      padding='40px'
    >
      <ContactBox />
    </Flex>
  )
}

export default Contact
