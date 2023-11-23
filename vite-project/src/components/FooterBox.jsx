import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react'

const FooterBox = ({ title, links }) => {
  return (
    <Box display='flex' flexDirection='column' width='100px'>
      <Heading as='h2' fontSize='2xl' mb={4} color='white'>
        {title}
      </Heading>
      <List spacing={2}>
        {links.map((link) => (
          <ListItem key={link.label} color='gray.200'>
            <Link
              _hover={{ textDecor: 'none', color: 'blue.300' }}
              href={link.href}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default FooterBox
