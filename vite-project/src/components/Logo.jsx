import React from 'react'
import { Heading, chakra } from '@chakra-ui/react'

const NormalText = chakra('span', {
  baseStyle: { fontWeight: 'normal' },
})

const Logo = () => {
  return (
    <>
      Group<NormalText>Finder</NormalText>
    </>
  )
}

export default Logo
