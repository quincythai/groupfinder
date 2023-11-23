import { Flex } from '@chakra-ui/react'
import GroupCard from '../components/GroupCard'
// import DrawerExample from '../components/DrawerExample'

const CoursePage = () => {
  const projectData = [
    {
      image: 'byow.png',
      heading: 'Need a partner for BYOW',
      text: "Hi, I’m Julia and I'm a second year student trying to declare CS. I prefer planning things out and finishing the project ahead of time to avoid stress. I’m usually available after 3pm on Tues/Wed/Thurs and I'm sometimes available after 3pm on Mon/Fri. I'm also down to work on weekends at anytime since I'm usually free. I’m flexible with meeting in person and/or online. ",
      numPeopleNeeded: '0/1',
    },
    {
      image: 'data8projecttwo.png',
      heading: 'Project Two',
      text: "Hi I'm Andy and I wanted to work with another transfer student with me. ",
      numPeopleNeeded: '0/1',
    },
    {
      image: 'groupfinder.png',
      heading: 'Need two people who know backend',
      text: "Hi, I'm Quincy and we have a full stack project called GroupFinder where we help Berkeley students find groups for their projects. We're hoping to get someone who knows MySQL and Node.js",
      numPeopleNeeded: '1/2',
    },
    {
      image: 'cs61c.png',
      heading: 'Example',
      text: '...',
      numPeopleNeeded: '0/111',
    },
    {
      image: 'cs61c.png',
      heading: 'Example',
      text: '...',
      numPeopleNeeded: '0/111',
    },
    {
      image: 'cs61c.png',
      heading: 'Example',
      text: '...',
      numPeopleNeeded: '0/111',
    },
  ]

  return (
    <Flex
      bg='gray.200'
      padding='40px'
      justifyContent='center'
      alignItems='center'
    >
      <Flex flexWrap='wrap' gap='20px'>
        {projectData.map((project) => (
          <GroupCard
            key={project.heading}
            image={project.image}
            heading={project.heading}
            text={project.text}
            numPeopleNeeded={project.numPeopleNeeded}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default CoursePage
