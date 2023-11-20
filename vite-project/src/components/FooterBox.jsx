import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react'

// TODO: replace index with something else because
// bad practice to use index for mapping

const FooterBox = ({ title, links }) => {
  return (
    <Box display='flex' flexDirection='column' width='100px'>
      <Heading as='h2' fontSize='2xl' mb={4} color='white'>
        {title}
      </Heading>
      <List spacing={2}>
        {links.map((link, index) => (
          <ListItem key={index} color='gray'>
            <Link href={link.href}>{link.label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default FooterBox
