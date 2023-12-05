import { Flex, Box, Button, Text, useTheme, filter } from '@chakra-ui/react'
import GroupCard from '../components/GroupCard'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SampleGroupCard from '../components/SampleGroupCard'
import Sort from '../components/Sort'

// import DrawerExample from '../components/DrawerExample'

const CoursePage = () => {
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
  // Fetches the data from the backend as soon as the component loads.
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    { /* Should run a function that gets data based on the filter. */ }
    <Sort
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
        {courseData.map((project) => (
          <GroupCard
            className={className}
            key={project.heading}
            image={project.Image}
            heading={project.Heading}
            text={project.Text}
            currentNumPeople={project.currentNumPeople}
            totalPeopleNeeded={project.totalPeopleNeeded}
          />
        ))}
      </Flex>
    </Flex>

    </>
  )
}

export default CoursePage
