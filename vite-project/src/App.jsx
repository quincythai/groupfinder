import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>
        <Route
          path='/about'
          element={
            <Layout>
              <About />
            </Layout>
          }
        ></Route>
        <Route
          path='/courses'
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        ></Route>
        <Route
          path='/coursepage'
          element={
            <Layout>
              <CoursePage />
            </Layout>
          }
        ></Route>
      </Routes>
    </>
  )
}

//TODO: figure out props validation error
// TODO: figure out how to have minheight stuff

const Layout = ({ children }) => (
  <Box minHeight='100vh'>
    <Navbar />
    {children}
    <Footer />
  </Box>
)

const About = () => <h2>About page</h2>

export default App
