import { Flex, Box, Button, Text, useTheme, filter } from '@chakra-ui/react'
import GroupCard from '../components/GroupCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SampleGroupCard from '../components/SampleGroupCard'
import Filter from '../components/Sort'
import { useAuth0 } from '@auth0/auth0-react'
// import DrawerExample from '../components/DrawerExample'

const CoursePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const className = 'CS61C'
  // Get course data from backend.

  const [courseData, setCourseData] = useState([
    // {
    //   image: 'byow.png',
    //   heading: 'Need a partner for BYOW',
    //   text: "Hi, I’m Julia and I'm a second year student trying to declare CS. I prefer planning things out and finishing the project ahead of time to avoid stress. I’m usually available after 3pm on Tues/Wed/Thurs and I'm sometimes available after 3pm on Mon/Fri. I'm also down to work on weekends at anytime since I'm usually free. I’m flexible with meeting in person and/or online. ",
    //   numPeopleNeeded: '0/1',
    // },
    // {
    //   image: 'data8projecttwo.png',
    //   heading: 'Project Two',
    //   text: "Hi I'm Andy and I wanted to work with another transfer student with me. ",
    //   numPeopleNeeded: '0/1',
    // },
    // {
    //   image: 'groupfinder.png',
    //   heading: 'Need two people who know backend',
    //   text: "Hi, I'm Quincy and we have a full stack project called GroupFinder where we help Berkeley students find groups for their projects. We're hoping to get someone who knows MySQL and Node.js",
    //   numPeopleNeeded: '1/2',
    // },
    // {
    //   image: 'cs61c.png',
    //   heading: 'Example',
    //   text: '...',
    //   numPeopleNeeded: '0/111',
    // },
    // {
    //   image: 'cs61c.png',
    //   heading: 'Example',
    //   text: '...',
    //   numPeopleNeeded: '0/111',
    // },
    // {
    //   image: 'cs61c.png',
    //   heading: 'Example',
    //   text: '...',
    //   numPeopleNeeded: '0/111',
    // },
  ])

  const [sortBy, setSortBy] = useState('dateCreated')

  const [currentGroup, setCurrentGroup] = useState('null')
  // Makes an api request to the backend to get all of the data from the course.
  const getData = async () => {
    const response = await axios.get(`http://localhost:5001/api/courses`, {
      params: {
        className: className,
      },
    })
    setCourseData(response.data)
    console.log(response.data)
  }
  const getDataSorted = async (sort) => {
    console.log(sort)
    const response = await axios.get(`http://localhost:5001/api/courses`, {
      params: {
        className: 'CS61C',
        sortBy: sort,
      },
    })
    setCourseData(response.data)
    console.log(response.data)
  }
  const handleFilterData = (selectedSort) => {
    if (selectedSort != sortBy) {
      getDataSorted(selectedSort)
      setSortBy(selectedSort)
    }
  }

  const getCurrentGroup = async () => {
    try {
      console.log("username is: ", user.name)
      const response = await axios.get(`http://localhost:5001/api/getcurrentgroup`, {
        params: {
          className: className,
          username: user.name,
        },
      })
      setCurrentGroup(response.data[0]['heading'])
      console.log(currentGroup)
    } catch (error) {
      console.log('Error getting current group: ', error)
  }
  }
  // Fetches the data from the backend as soon as the component loads.
  useEffect(() => {
    if (isAuthenticated) {
      console.log("isAuthenticated is: ", isAuthenticated)
      getData().then(() => {
        getCurrentGroup().then(() => {
          courseData.map((project) => {
            project.Heading == currentGroup ? console.log("Current group is: ", project.Heading) : console.log("Not current group")
          })
        })
      })
    }
  }, [user, isAuthenticated])

  return (
    <>
    { /* Should run a function that gets data based on the filter. */ }
    <Filter
    onSortAvail={
      () => handleFilterData('Availability')
    }
    onSortDate={
      () => handleFilterData('dateCreated')
    }
    />


    <Flex
      bg='gray.200'
      padding='40px'
      paddingTop= '10px'
      justifyContent='center'
      alignItems='center'
    >


      <Flex flexWrap='wrap' gap='20px'>
        <SampleGroupCard />
        {courseData.map((project) => currentGroup && project.Heading == currentGroup ? (
          <GroupCard
            isCurrent={true}
            className={className}
            key={project.Heading}
            image={project.Image}
            heading={project.Heading}
            text={project.Text}
            currentNumPeople={project.currentNumPeople}
            totalPeopleNeeded={project.totalPeopleNeeded}
          />
        ) : (
          <GroupCard
            isCurrent={false}
            className={className}
            key={project.Heading}
            image={project.Image}
            heading={project.Heading}
            text={project.Text}
            currentNumPeople={project.currentNumPeople}
            totalPeopleNeeded={project.totalPeopleNeeded}
          />
        )
        )}
      </Flex>
    </Flex>

    </>
  )
}

export default CoursePage
