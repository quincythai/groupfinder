import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex place-content-between'>
      <div className=''>
        GroupFinder
      </div>
      <div>
        <ul className='flex'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;