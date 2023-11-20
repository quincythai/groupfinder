import React from 'react'
import { Box, Heading, List } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import FooterBox from './FooterBox'

const Footer = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]

  const links = [
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/about' },
  ]

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      padding='20px'
      backgroundColor={primaryColor}
      width='100%'
      bottom='0'
      left='0'
      height='200px'
      gap='100px'
    >
      <FooterBox title='Support' links={links}></FooterBox>
      <FooterBox title='Support' links={links}></FooterBox>
      <FooterBox title='Support' links={links}></FooterBox>
    </Box>
  )
}

export default Footer
