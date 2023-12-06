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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea
} from '@chakra-ui/react'
import CreateClass from '../components/CreateClass'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react'
import JoinClass from '../components/JoinClass';

// import { Link as RouterLink } from 'react-router-dom'
// TODO: understand why routerlink is not used?

// const courseData = [
//   {
//     title: 'CS61A',
//     description: 'Structure and Interpretation of Computer Programs',
//     imageSrc: './cs61a.png',
//     link: 'https://example.com/cs61a', // External link
//   },
//   {
//     title: 'CS61B',
//     description: 'Data Structures',
//     imageSrc: './cs61b.png',
//     link: 'https://example.com/cs61b', // External link
//   },
//   {
//     title: 'CS61C',
//     description: 'Great Ideas in Computer Architecture (Machine Structures)',
//     imageSrc: './cs61c.png',
//     link: '/coursepage',
//   },
//   // Add more course data as needed
// ]

const Courses = () => {
  const { user, isAuthenticated} = useAuth0();
  const [classNames, setClassNames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          console.log(user.name + "LSKDJFLKSDJFLKSDJFLKJ");
          
          const response = await axios.get('http://localhost:5001/api/user-class', {
            params: {
              user: user.name
            }
          });
          setClassNames(response.data.map((jsonObject) =>jsonObject.className));
          console.log(response.data.map((jsonObject) =>jsonObject.className));
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData function inside useEffect
    fetchData();
  }, [isAuthenticated, user]); // Include dependencies in the dependency array



  const [classDescriptions, setClassDescriptions] = useState([]);

  useEffect(() => {
    const fetchClassDescriptions = async () => {
      try {
        const promises = classNames.map(async (className) => {
          const response = await axios.get('http://localhost:5001/api/classDesc', {
            params: {
              className: className,
            },
          });
          return response.data[0];
        });

        const descriptions = await Promise.all(promises);
        setClassDescriptions(descriptions);
      } catch (error) {
        console.error('Error fetching class descriptions:', error);
      }
    };

    fetchClassDescriptions();
  }, [classNames]);
  console.log(classDescriptions);




  const [showJoin, setShowJoin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [classCode, setClassCode] = useState('');
  const [classCodeConfirm, setClassCodeConfirm] = useState([]);
  const [Title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');

  
  const handleCloseJoinClass = () => {
    setShowJoin(false);
    setClassCode('');
  }
  const handleOpenJoinClass = () => {
    setShowJoin(true);
  }

  const handleCloseCreateClass = () => {
    setShowCreate(false);
    setTitle('');
    setDesc('');
  }
  const handleOpenCreateClass = () => {
    setShowCreate(true);
  }


  const handleJoinClass = async () => {
    handleCloseJoinClass();

    try {
      const response = await axios.get('http://localhost:5001/api/classDesc', {
        params: {
          className: classCode,
        },
      });
      setClassCodeConfirm(response.data);
      console.log(response.data);

      if (classCodeConfirm && isAuthenticated) {
        const params = {
          username: user.name,
          classCode
        };
        const endpoint = 'http://localhost:5001/api/addUserToClass';

        axios.post(endpoint, params).then((response)=>{
          console.log('Group created successfully: ', response.data)
        })
        .catch((error)=>{
          console.log('Error creating group: ', error)
        });
        window.location.reload();
      }
    } catch (error) {
      console.error('Error fetching class descriptions:', error);
    }
  };


  const handleCreateClass = async () => {
    // console.log(Desc);
    handleCloseCreateClass();
    const params = {
      Title,
      Desc,
      imageSrc:'group-svgrepo-com.svg',
      Link:'https://example.com/cs61a'
    }
    const endpoint = 'http://localhost:5001/api/addNewClass'
    axios.post(endpoint, params).then((response)=>{
      console.log('Class created Successfully: ', response.data)
    }).catch((error)=>{
      console.log('Error creating group: ', error)
    });

    const userParams ={
      username: user.name,
      classCode: Title
    }
    const userEndpoint = 'http://localhost:5001/api/addUserToClass'
    axios.post(userEndpoint, userParams).then((response)=>{
      console.log('User added Successfully: ', response.data )
    }).catch((error)=>{
      console.log('Error creating group: ', error)
    });
    window.location.reload();
  }
  


  return (
    <>
      <Box paddingY='20px' paddingX='40px'>
        <Heading marginBottom='20px'>Courses</Heading>
        <Flex alignItems='center' paddingBottom='20px' gap='10px'>
        <Button onClick={handleOpenCreateClass}>Create</Button>
        <Button onClick={handleOpenJoinClass}>Join</Button>
        </Flex>
        <Flex flexWrap='wrap' gap='20px'>
          {classDescriptions.map((course) => (
            <Link
              key={course.Title}
              href={course.Link}
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
                  alt={course.Title}
                  bg='white'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>{course.Title}</Heading>
                    <Text py='2'>{course.Description}</Text>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
          ))}
        </Flex>
      </Box>


      <JoinClass isOpen={showJoin} 
                  onClose={handleCloseJoinClass} 
                  onChange={(event) => setClassCode(event.target.value)} 
                  onClick={handleJoinClass}/>

      <CreateClass isOpen={showCreate}
                    onClose={handleCloseCreateClass}
                    onClick={handleCreateClass}
                    onChangeTitle={(event)=>setTitle(event.target.value)}
                    onChangeDesc={(event)=>setDesc(event.target.value)}
      />

    </>

  )
}

export default Courses
