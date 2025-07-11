import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Aakash Labs</h1>
    <nav className="space-x-4">
      <a href="#about">About</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      <Link to="/api" className="underline">Public API</Link>
    </nav>
  </header>
);

export default Header;
