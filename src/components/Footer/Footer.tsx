import React, { FC } from "react";
import "./Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className="Footer">
    <div className="footer-container">
      <div className="footer-title">CypherQueenz '22 | A Seattle Bgirl Organization</div>
      <div className="footer-links-container">
        <a className="hero-button hero-button-ig" href="https://www.instagram.com/cypherqueenz/?hl=en" target="_blank" rel="noopener noreferrer">
          <div className="fa fa-instagram"></div>
        </a>
        <a className="hero-button hero-button-fb" href="https://www.facebook.com/Cypher-Queenz-111665977110803/" target="_blank" rel="noopener noreferrer">
          <div className="fa fa-facebook"></div>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
