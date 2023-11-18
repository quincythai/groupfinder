import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

const Home = () => <h2>Home page</h2>;
const About = () => <h2>About page</h2>;

export default App;