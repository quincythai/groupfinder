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

// TODO:
// Figure out how to truncate descriptions that are too long
// Center image
// Have all same image sizes

const GroupCard = ({ image, heading, text, numPeopleNeeded }) => {
  return (
    <Card minW='xs' maxW='xs'>
      <CardBody>
        <Image
          src={image}
          alt='Project image'
          borderRadius='lg'
          objectFit='contain'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{heading}</Heading>
          <Text>{text}</Text>
          <Text alignSelf='end' color='blue.600' fontSize='2xl'>
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
