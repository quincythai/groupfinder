import React from 'react';
import { Route, Routes} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

export default App;
