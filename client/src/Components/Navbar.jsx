// Navbar.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (pathname) => location.pathname === pathname;

  return (
    <nav className="bg-black text-white p-4 lg:p-7 flex flex-col lg:flex-row justify-between items-center border-b border-gray-500">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white font-extrabold text-2xl lg:ml-14">
          <NavLink to="/" style={{ color: isActive("/") && "blue" }}>
            Code<span className="text-2xl text-blue-600">X</span>{" "}
          </NavLink>
        </div>
        <div
          className={`lg:flex lg:flex-row space-x-4 lg:space-x-8 lg:mr-5 font-semibold ${
            menuOpen ? "flex flex-col items-center mt-4" : "hidden"
          }`}
        >
          <NavLink
            to="/events"
            style={{ color: isActive("/events") && "blue" }}
          >
            Events
          </NavLink>
          <NavLink to="/blog" style={{ color: isActive("/blog") && "blue" }}>
            Blog
          </NavLink>
          <NavLink to="/news" style={{ color: isActive("/news") && "blue" }}>
            News
          </NavLink>
          <NavLink to="/team" style={{ color: isActive("/team") && "blue" }}>
            Team
          </NavLink>
          <NavLink
            to="/community"
            style={{ color: isActive("/community") && "blue" }}
          >
            Community
          </NavLink>
          <NavLink to="/login" style={{ color: isActive("/login") && "blue" }}>
            Login
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-gray-500 font-semibold focus:outline-none"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
