import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GroupCardModal = ({ isOpen, onClose, heading, text, className, isFull }) => {
  const [members, setMembers] = useState([])
  // console.log(isFull)
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
  const getGroupInfo = () => {
    const params = {
      className,
      heading,
    }
    const endpoint = 'http://localhost:5001/api/getusersingroup'
    axios.get(endpoint, params)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log('Error retrieving group info: ', error)
    })
  }
  useEffect(() => {
    getGroupInfo()
  }, []);

  return ( members.length != 0 ? 
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {text}
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Members</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {members.map((member) => (
                    <Tr>
                      <Td>{member}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
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
  :
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
