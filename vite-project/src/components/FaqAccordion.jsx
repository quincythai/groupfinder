import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const FaqAccordion = () => {
  const tabs = [
    {
      title: 'What is GroupFinder?',
      text: 'Have you ever needed to find someone to work with on a school project, but you wanted to find someone who aligned with your goals? Using GroupFinder, you can login with your Berkeley credentials, pick an affiliated class that is hosting this app, select the project you want to find a partner for, and then browse all the people/groups who are actively looking for partners. It is a catalog of cards where you can see people’s goals/desires, their relevant experience, and rankings of how comfortable they are with working on certain components of the project.',
    },
    {
      title: 'Sample',
      text: 'Lorem ipsum',
    },
    {
      title: 'Sample',
      text: 'Lorem ipsum',
    },
    {
      title: 'Sample',
      text: 'Lorem ipsum',
    },
    {
      title: 'Sample',
      text: 'Lorem ipsum',
    },
  ]

  return (
    <Accordion allowMultiple>
      {tabs.map((tab) => (
        <AccordionItem key={tab.title}>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontWeight='bold'>
                {tab.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{tab.text}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
export default FaqAccordion
