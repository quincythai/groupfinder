import { Box } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import FooterBox from './FooterBox'

const Footer = () => {
  const theme = useTheme()
  const primaryColor = theme.colors.blue[800]

  const supportLinks = [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ]

  const aboutLinks = [{ label: 'About Us', href: '/about' }]

  return (
    <Box
      display='flex'
      justifyContent='flex-start'
      alignItems='flex-start'
      padding='20px'
      backgroundColor={primaryColor}
      width='100%'
      bottom='0'
      left='0'
      height='100%'
      gap='100px'
    >
      <FooterBox title='Support' links={supportLinks}></FooterBox>
      <FooterBox title='About Us' links={aboutLinks}></FooterBox>
    </Box>
  )
}

export default Footer
