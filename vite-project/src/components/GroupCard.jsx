import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Image,
  Heading,
  Button,
  Divider,
  ButtonGroup,
} from '@chakra-ui/react'

const GroupCard = ({ image, heading, text, numPeopleNeeded }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={image} alt='Project image' borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{heading}</Heading>
          <Text>{text}</Text>
          <Text color='blue.600' fontSize='2xl'>
            {numPeopleNeeded}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter display='flex' justifyContent='flex-end'>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            View Info
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Join
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default GroupCard
