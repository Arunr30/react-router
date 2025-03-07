import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Logo</h2>
      <ul>
        <NavLink to="about">
          <li>About</li>
        </NavLink>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="product">
          <li>Product</li>
        </NavLink>
        <NavLink to="contact">
          <li>contact</li>
        </NavLink>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default NavBar;
