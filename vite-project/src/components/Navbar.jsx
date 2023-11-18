import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 p-6">
      <div className="text-white text-2xl">
        <span className="font-bold">Group</span>Finder
      </div>
      <div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
