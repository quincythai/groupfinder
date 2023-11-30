import React, { useState } from 'react'
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
} from '@chakra-ui/react'

const SampleGroupCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [currentNumPeople, setCurrentNumPeople] = useState(0)
  const [totalNumPeople, setTotalNumPeople] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setInputValue('') // Reset the input value when closing the modal
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleCreateGroup = () => {
    // Handle creating the group with the entered text
    console.log('Creating group with input:', inputValue)

    // Close the modal after handling the creation
    handleCloseModal()
  }

  return (
    <>
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
              mb='4'
            />
            <Text>Upload image:</Text>
            <Input
              value={inputValue}
              type='file'
              onChange={(event) => setImage(event.target.value)}
              mb='4'
            />
            <Text>Description:</Text>
            <Input value={inputValue} onChange={handleInputChange} mb='4' />
            <Text>Current number of people:</Text>
            <Input value={inputValue} onChange={handleInputChange} mb='4' />
            <Text>Total number of people:</Text>
            <Input value={inputValue} onChange={handleInputChange} mb='4' />
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
