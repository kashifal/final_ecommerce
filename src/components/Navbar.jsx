import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-margin">
        <NavLink to="/">Shirts</NavLink>
        <NavLink to="javascript">Glasses</NavLink>
        <NavLink to="python">Shoe's</NavLink>
        <NavLink to="java">Bags</NavLink>
        <NavLink to="cpp">Pants</NavLink>
        <NavLink to="ruby">Covers</NavLink>
        <NavLink to="memes">ME</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
