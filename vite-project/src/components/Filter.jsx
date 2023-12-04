import { Flex, Box, Button, Text, useTheme } from '@chakra-ui/react'
import { useState } from 'react'

const Filter = (props) => {
    return (
    <>
    <Flex 
    padding='10px'
    paddingBottom='0px'
    bg='gray.200'
    justifyContent='center'
    gap = '20px'
    alignItems='center'>
    <Text as="b">
    Filter:
    </Text>
     <Button
      colorScheme='teal'
      _hover={{ transform: 'scale(1.03)' }}
      _active={{opacity:'60%'}}
      onClick={props.onFilterAuth}>
      Availability
    </Button>
    
    <Button
      colorScheme='teal'
      _hover={{ transform: 'scale(1.03)' }}
      _active={{opacity:'60%'}}
      onClick={props.onFilterDate}>
      Date Created
    </Button> 

    </Flex>
    </>
    )
}

export default Filter