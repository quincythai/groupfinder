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
      text: 'Developer',
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
        <Grid templateColumns='repeat(2, 1fr)'>
          <GridItem>
            <Card
              display='flex'
              flexDirection='row'
              bg='gray.200'
              maxW='500px' // Set the maximum width of the Card
              p='4' // Add padding for spacing
              borderRadius='md' // Apply a moderate border radius to the Card
            >
              <Image
                src='quincy.JPG'
                borderRadius='full'
                boxSize='100px'
                objectFit='cover'
              />
              <Stack direction='column' ml='4'>
                <Text fontWeight='bold' fontSize='large'>
                  Quincy Thai
                </Text>
                <Flex gap='8px'>
                  <Image src='github-142-svgrepo-com.svg' boxSize='20px' />
                  <Image src='linkedin-svgrepo-com.svg' boxSize='20px' />
                  <Image src='website-ui-web-svgrepo-com.svg' boxSize='20px' />
                </Flex>
                <Text>
                  Founder of GroupFinder, Full Stack Developer, DevOps Engineer,
                  Data Scientist, Software Engineer, Systems Architect, Mobile
                  App Developer, Cloud Solutions Specialist, Database
                  Administrator, Network Engineer, Security Analyst, Quality
                  Assurance Engineer, Technical Support Specialist, IT
                  Consultant, Machine Learning Engineer, Automation Engineer,
                  UI/UX Designer, Product Manager, Scrum Master, Agile Coach,
                  Frontend Developer, Backend Developer, Mobile App Developer,
                  Web Developer, Game Developer, Blockchain Developer, AI
                  Engineer, Robotics Engineer, Embedded Systems Engineer,
                  Cybersecurity Specialist, Network Administrator, Cloud
                  Architect, Data Engineer, Business Intelligence Analyst,
                  Systems Analyst, Technical Writer, UX Researcher, Systems
                  Integrator, IT Project Manager, Release Manager, Computer
                  Vision Engineer, Natural Language Processing Engineer, UI/UX
                  Illustrator, Augmented Reality Developer, Virtual Reality
                  Developer, IT Operations Manager, Growth Hacker, Technical
                  Evangelist, Chief Innovation Officer, Chief Technology
                  Officer, Chief Information Officer, Chief Data Officer, Chief
                  Security Officer, Chief Privacy Officer, Chief Digital
                  Officer, Chief Experience Officer, Chief Analytics Officer,
                  Chief Cloud Officer, Chief Transformation Officer, Chief
                  Automation Officer, Chief Integration Officer, Chief Knowledge
                  Officer, Chief Accessibility Officer, Chief AI Officer, Chief
                  Quantum Officer.
                </Text>
              </Stack>
            </Card>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default About
