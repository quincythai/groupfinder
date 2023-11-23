import {
  Card,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'

const ContactBox = () => {
  return (
    <Card variant='filled' padding='30px' maxW='500px' gap='20px'>
      <Heading>Contact Us</Heading>
      <Text color='gray.700'>
        Have questions, feedback, or just want to say hello? We'd love to hear
        from you! Feel free to reach out using the form to send us a message.
      </Text>
      <FormControl display='flex' flexDirection='column'>
        <FormLabel>Email address</FormLabel>
        <Input
          variant='outline'
          placeholder='email@example.com'
          borderColor='gray.700'
          type='email'
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel mt={4}>Text</FormLabel>
        <Textarea
          variant='outline'
          borderColor='gray.700'
          placeholder='Your message...'
          resize='vertical'
        ></Textarea>
        <Button colorScheme='blue' variant='solid' mt={4} ml='auto'>
          Submit form
        </Button>
      </FormControl>
    </Card>
  )
}

export default ContactBox
