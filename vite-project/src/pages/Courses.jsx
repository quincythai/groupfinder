import {
  Flex,
  Heading,
  Card,
  Box,
  Image,
  Stack,
  CardBody,
  Text,
  Link,
} from '@chakra-ui/react'
// import { Link as RouterLink } from 'react-router-dom';

const courseData = [
  {
    title: 'CS61A',
    description: 'Structure and Interpretation of Computer Programs',
    imageSrc: './cs61a.png',
    link: 'https://example.com/cs61a', // External link
  },
  {
    title: 'CS61B',
    description: 'Data Structures',
    imageSrc: './cs61b.png',
    link: 'https://example.com/cs61b', // External link
  },
  {
    title: 'CS61C',
    description: 'Great Ideas in Computer Architecture (Machine Structures)',
    imageSrc: './cs61c.png',
    link: 'https://example.com/cs61c', // External link
  },
  // Add more course data as needed
]

const Courses = () => {
  return (
    <>
      <Box paddingY='20px' paddingX='40px'>
        <Heading marginBottom='20px'>Courses</Heading>
        <Flex flexWrap='wrap' gap='20px'>
          {courseData.map((course) => (
            <Link
              key={course.title}
              href={course.link}
              _hover={{ textDecoration: 'none' }}
            >
              <Card
                direction={{ base: 'column', sm: 'row' }}
                variant='outline'
                bg='gray.200'
                flexGrow='1'
                _hover={{
                  shadow: 'lg',
                  transform: 'scale(1.02)',
                }}
                transition='transform 0.20s'
                // TODO: sizing so it looks like ed
                // Something with min and max width?
              >
                <Image
                  objectFit='contain'
                  maxW={{ base: '100%', sm: '150px' }}
                  src={course.imageSrc}
                  alt={course.title}
                  bg='white'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>{course.title}</Heading>
                    <Text py='2'>{course.description}</Text>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default Courses
