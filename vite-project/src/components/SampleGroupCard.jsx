import { useState } from 'react'
import axios from 'axios'
import {
  Card,
  Button,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
} from '@chakra-ui/react'

const SampleGroupCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [heading, setHeading] = useState('')
  const [image, setImage] = useState(null)
  const [text, settext] = useState('')
  const [currentNumPeople, setCurrentNumPeople] = useState(0)
  const [totalPeopleNeeded, setTotalPeopleNeeded] = useState(0)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  // Close and reset state variables
  const handleCloseModal = () => {
    setIsOpen(false)
    setHeading('')
    setImage(null)
    settext('')
    setCurrentNumPeople(0)
    setTotalPeopleNeeded(0)
  }
  const className = 'CS61C'
  const handleCreateGroup = async() => {
    if (currentNumPeople > totalPeopleNeeded) {
      alert("Current number of people cannot be greater than total number of people.")
      console.log("Current number of people cannot be greater than total number of people.")
      return;
    }
    const params = {
      className,
      heading,
      image,
      text,
      currentNumPeople,
      totalPeopleNeeded,
  };

    const endpoint = 'http://localhost:5001/api/addgroup'
    // The time when the group was created.
      axios.post(endpoint, params)
      .then((response) => {
        console.log('Group created successfully: ', response.data)
      })
      .catch((error) => {
        console.log('Error creating group: ', error)
      })
      handleCloseModal()
      window.location.reload()
  }

  return (
    <>
      {/* Create your own group card */}
      <Card minW='xs' maxW='xs' display='flex' justifyContent='center'>
        <Flex flexDirection='column' gap='20px'>
          <Text alignSelf='center' fontWeight='bold' fontSize='24px'>
            Create Your Own Group
          </Text>
          <Button
            variant='solid'
            alignSelf='center'
            colorScheme='green'
            onClick={handleOpenModal}
          >
            Create group
          </Button>
        </Flex>
      </Card>

      {/* Modal for create your own group card */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Enter Heading:</Text>
            <Input
              value={heading}
              onChange={(event) => setHeading(event.target.value)}
              placeholder='Heading'
              mb='4'
            />
            <Text>Upload image:</Text>
            <Input
              value={image}
              type='file'
              onChange={(event) => setImage(event.target.files[0])}
              mb='4'
              padding='4px'
            />
            <Text>Description:</Text>
            <Textarea
              value={text}
              onChange={(event) => settext(event.target.value)}
              mb='4'
              resize='none'
              placeholder='Enter text here'
            />
            <Text>Current number of people:</Text>
            <Input
              // To not display the default 0 number
              value={currentNumPeople === 0 ? '' : currentNumPeople}
              placeholder='Number of people you currently have'
              onChange={(event) => setCurrentNumPeople(event.target.value)}
              type='number'
              mb='4'
            />
            <Text>Total number of people:</Text>
            <Input
              value={totalPeopleNeeded === 0 ? '' : totalPeopleNeeded}
              placeholder='Total number of people you need'
              onChange={(event) => setTotalPeopleNeeded(event.target.value)}
              type='number'
              mb='4'
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button colorScheme='green' onClick={handleCreateGroup}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SampleGroupCard
