import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

import React from 'react'
import axios from 'axios'

const GroupCardModal = ({ isOpen, onClose, heading, text, className, isFull }) => {
  console.log(isFull)
  const joinGroup = () => {
    const params = {
      className,
      heading,
    }
    console.log(params)
    const endpoint = 'http://localhost:5001/api/joingroup'
    axios.post(endpoint, params)
    .then((response) => {
      console.log('Group joined successfully: ', response.data)
    })
    .catch((error) => {
      console.log('Error joining group: ', error)
    })
    window.location.reload()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {text}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' isDisabled={isFull} onClick={joinGroup}>Join</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GroupCardModal
