import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/myaccount">My Account</Link>
        </li>
        <li>
          <Link to="/addnewroom">Add New Room</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
