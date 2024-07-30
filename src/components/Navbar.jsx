// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <ul className="flex justify-around items-center">
        <li className="group">
          <Link
            to="/weather"
            className="text-white text-lg font-semibold transition duration-300 ease-in-out transform group-hover:scale-110"
          >
            Weather App
          </Link>
        </li>
        <li className="group">
          <Link
            to="/calendar-converter"
            className="text-white text-lg font-semibold transition duration-300 ease-in-out transform group-hover:scale-110"
          >
            Calendar Converter
          </Link>
        </li>
        <li className="group">
          <Link
            to="/tic-tac-toe"
            className="text-white text-lg font-semibold transition duration-300 ease-in-out transform group-hover:scale-110"
          >
            Tic-Tac-Toe
          </Link>
        </li>
        <li className="group">
          <Link
            to="/coin-flip"
            className="text-white text-lg font-semibold transition duration-300 ease-in-out transform group-hover:scale-110"
          >
            Coin Flip Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;