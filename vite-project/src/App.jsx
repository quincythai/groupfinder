import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'

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
      </Routes>
    </>
  )
}

const Layout = ({ children }) => (
  <div style={{ minHeight: '100vh' }}>
    <Navbar />
    {children}
    <Footer />
  </div>
)

const About = () => <h2>About page</h2>

export default App
