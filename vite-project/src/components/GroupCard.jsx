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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
        gap='20px'
      >
        <Text alignSelf='end' color='blue.600' fontSize='2xl'>
          {numPeopleNeeded}
        </Text>
        <Button variant='solid' colorScheme='blue'>
          View Info
        </Button>
      </CardFooter>
    </Card>
  )
}

export default GroupCard
