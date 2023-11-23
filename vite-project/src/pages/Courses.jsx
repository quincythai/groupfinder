import {
  Flex,
  Heading,
  Card,
  Link,
  Box,
  Image,
  Stack,
  CardBody,
  Text,
} from '@chakra-ui/react'

const courseData = [
  {
    title: 'CS61A',
    description: 'Structure and Interpretation of Computer Programs',
    imageSrc: './cs61a.png',
  },
  {
    title: 'CS61B',
    description: 'Data Structures',
    imageSrc: './cs61b.png',
  },
  {
    title: 'CS61C',
    description: 'Great Ideas in Computer Architecture (Machine Structures)',
    imageSrc: './cs61c.png',
  },
  // Add more course data as needed
]

const Courses = () => {
  return (
    <>
      <Box paddingY='20px' paddingX='40px'>
        <Heading marginBottom='20px'>Courses</Heading>
        <Flex flexWrap='wrap' gap='20px'>
          {courseData.map((course, index) => (
            <Link
              href='/coursepage'
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              bg='gray.200'
              minW={{ base: '100%', sm: '400px' }}
              maxW={{ base: '100%', sm: '400px' }}
              as={Card}
              _hover={{
                textDecoration: 'none',
                shadow: 'lg',
                transform: 'scale(1.02)',
              }}
              transition='transform 0.20s'
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
            </Link>
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default Courses
