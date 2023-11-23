import { Flex, Heading } from '@chakra-ui/react'
import FaqAccordion from '../components/FaqAccordion'

const Faq = () => {
  return (
    <Flex justifyContent='center' padding='20px'>
      <Heading>Frequently Asked Questions</Heading>
      <FaqAccordion />
    </Flex>
  )
}

export default Faq
