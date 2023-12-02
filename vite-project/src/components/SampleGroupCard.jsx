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
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [currentNumPeople, setCurrentNumPeople] = useState(0)
  const [totalNumPeople, setTotalNumPeople] = useState(0)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  // Close and reset state variables
  const handleCloseModal = () => {
    setIsOpen(false)
    setTitle('')
    setImage(null)
    setDescription('')
    setCurrentNumPeople(0)
    setTotalNumPeople(0)
  }

  const handleCreateGroup = () => {
    const groupData = [
      title,
      image,
      description,
      currentNumPeople,
      totalNumPeople,
    ]

    const api = '/api/addgroup'
    axios
      .post(api, groupData)
      .then((response) => {
        console.log('Group created successfully: ', response.data)
        handleCloseModal()
      })
      .catch((error) => {
        console.log('Error creating group: ', error)
      })
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
            <Text>Enter title:</Text>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              mb='4'
              resize='none'
              placeholder='Enter description here'
            />
            <Text>Current number of people:</Text>
            <Input
              // To not display the default 0 number
              value={currentNumPeople === 0 ? '' : totalNumPeople}
              placeholder='Number of people you currently have'
              onChange={(event) => setCurrentNumPeople(event.target.value)}
              type='number'
              mb='4'
            />
            <Text>Total number of people:</Text>
            <Input
              value={totalNumPeople === 0 ? '' : totalNumPeople}
              placeholder='Total number of people you need'
              onChange={(event) => setTotalNumPeople(event.target.value)}
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
