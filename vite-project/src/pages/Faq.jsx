import { Flex, Heading } from '@chakra-ui/react'
import FaqAccordion from '../components/FaqAccordion'

const Faq = () => {
  return (
    <Flex
      direction='column'
      paddingTop='20px'
      paddingX='100px'
      justifyContent='flex-start'
      minH='80vh'
      gap='20px'
    >
      <Heading textAlign='center'>Frequently Asked Questions</Heading>
      <FaqAccordion />
    </Flex>
  )
}

export default Faq
