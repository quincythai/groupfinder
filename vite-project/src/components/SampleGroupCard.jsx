import { Card, Button, Heading, Text } from '@chakra-ui/react'

const SampleGroupCard = () => {
  return (
    <Card
      minW='xs'
      maxW='xs'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Button variant='solid' colorScheme='green'>
        Create group
      </Button>
    </Card>
  )
}

export default SampleGroupCard
