import React, { FC } from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <header className="Navbar">
      <input type="checkbox" id="navbar-check" />
      <div className="navbar-header">
        <div className="navbar-title">CypherQueenz</div>
      </div>
      <div className="navbar-btn">
        <label htmlFor="navbar-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="navbar-links">
        <a href="#mission">Mission</a>
        <a href="#vision">Vision</a>
        <a href="#history">History</a>
        <a href="#values">Values</a>
      </div>
  </header>
);

export default Navbar;
