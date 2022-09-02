import React from "react";
import "./one.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="two">
          <Link to="/about">About</Link>
        </li>

        <li className="12">
          <Link to="/login">Login</Link>
        </li>
        <li className="12">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
