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

import GroupCardModal from './GroupCardModal'
import { useDisclosure } from '@chakra-ui/react'

// TODO:
// Figure out how to truncate descriptions that are too long
// Center image
// Have all same image sizes
const defaultImage = 'quincy.JPG'

const GroupCard = ({ className, image, heading, text, currentNumPeople, totalPeopleNeeded }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  if (image == "null" || !image) {
    // console.log("image is null")
    image = defaultImage
  }
  // console.log(image)
  // console.log(text)
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
          {/* Truncate text if it is too long, otherwise display the whole text */}
          <Text>{
            text.length > 100 ? text.substring(0, 100) + "..." : text
            }</Text>
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
          {currentNumPeople} / {totalPeopleNeeded}
        </Text>
        <Button variant='solid' colorScheme='blue' onClick={onOpen}>
          View Info
        </Button>
        <GroupCardModal isOpen={isOpen} onClose={onClose}
        heading={heading}
        text={text}
        className={className}
        isFull={currentNumPeople === totalPeopleNeeded ? true: false} />
      </CardFooter>
    </Card>
  )
}

export default GroupCard
