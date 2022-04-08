import React, { FC } from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <header className="Navbar">
    <nav className="nav-container">
      <div className="nav-logo"></div>
      <div className="nav-links">
        <a href="#mission">Mission</a>
        <a href="#vission">Vision</a>
        <a href="#history">History</a>
        <a href="#values">Values</a>
      </div>
    </nav>
  </header>
);

export default Navbar;
