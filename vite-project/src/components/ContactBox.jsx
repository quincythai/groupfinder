import { useState } from 'react'
import axios from 'axios'

import {
  Card,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'

const ContactBox = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5001/api/contact_us',
        formData
      )

      console.log(response.data)

      // Reset after submission
      setFormData({
        email: '',
        message: '',
      })
    } catch (error) {
      console.log('Error submitting form: ', error)
    }
  }

  return (
    <Card variant='filled' padding='30px' maxW='500px' gap='20px'>
      <Heading>Contact Us</Heading>
      <Text color='gray.700'>
        Have questions, feedback, or just want to say hello? We'd love to hear
        from you! Feel free to reach out using the form to send us a message.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl display='flex' flexDirection='column'>
          <FormLabel>Email address</FormLabel>
          <Input
            variant='outline'
            placeholder='email@example.com'
            borderColor='gray.700'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel mt={4}>Text</FormLabel>
          <Textarea
            variant='outline'
            borderColor='gray.700'
            placeholder='Your message...'
            resize='vertical'
            name='message'
            value={formData.message}
            onChange={handleInputChange}
          ></Textarea>
          <Button
            colorScheme='blue'
            variant='solid'
            mt={4}
            ml='auto'
            type='submit'
          >
            Submit form
          </Button>
        </FormControl>
      </form>
    </Card>
  )
}

export default ContactBox
