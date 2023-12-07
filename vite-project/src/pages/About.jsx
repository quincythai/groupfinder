import {
  Card,
  Grid,
  GridItem,
  Heading,
  Flex,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'

const About = () => {
  const developerData = [
    {
      name: 'Quincy Thai',
      links: '...',
      text: 'Founder, Project Lead, Frontend Developer',
      imageSrc: '/quincy.JPG',
    },
    {
      name: 'JQ and Diego',
      links: '...',
      text: 'Backend Developers',
      imageSrc: 'jq_and_diego.jpg',
    },
    {
      name: 'Sebi',
      links: '...',
      text: 'Intern',
      imageSrc: 'sebi.png',
    },
    {
      name: 'Matt',
      links: '...',
      text: 'Intern',
      imageSrc: 'matt.jpeg',
    },
  ]

  return (
    <>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        paddingY='20px'
        paddingX='40px'
      >
        <Heading mb='20px'>Meet the Team</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          {developerData.map((developer, index) => (
            <GridItem key={index}>
              <Card
                display='flex'
                flexDirection='row'
                bg='gray.200'
                maxW='500px' // Set the maximum width of the Card
                p='4' // Add padding for spacing
                borderRadius='md' // Apply a moderate border radius to the Card
              >
                <Image
                  src={developer.imageSrc} // Add the appropriate image source
                  borderRadius='full'
                  boxSize='100px'
                  objectFit='cover'
                />
                <Stack direction='column' ml='4'>
                  <Text fontWeight='bold' fontSize='large'>
                    {developer.name}
                  </Text>
                  <Flex gap='8px'>
                    {/* Add the appropriate image sources for social links */}
                    <Image src='github-142-svgrepo-com.svg' boxSize='20px' />
                    <Image src='linkedin-svgrepo-com.svg' boxSize='20px' />
                    <Image
                      src='website-ui-web-svgrepo-com.svg'
                      boxSize='20px'
                    />
                  </Flex>
                  <Text>{developer.text}</Text>
                </Stack>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  )
}

export default About
