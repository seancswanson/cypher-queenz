import React, { FC } from 'react';
import './Main.css';

import About from '../About/About.tsx';

interface MainProps { }

const Main: FC<MainProps> = () => (
  <main className="Main">
    <div className="hero-container">
      <div className="hero-logo-container">
      <img src={process.env.PUBLIC_URL + "/cypher-queenz-logo-transparent.png"} className="cypher-queenz-logo" alt="logo" />
      </div>
      <h1>@CypherQueenz</h1>
      <div className="hero-links-container">
        <a className="hero-button hero-button-ig" href="https://www.instagram.com/cypherqueenz/?hl=en" target="_blank" rel="noopener noreferrer">
          <div className="fa fa-instagram"></div>
        </a>
        <a className="hero-button hero-button-fb" href="https://www.facebook.com/Cypher-Queenz-111665977110803/" target="_blank" rel="noopener noreferrer">
          <div className="fa fa-facebook"></div>
        </a>
      </div>
    </div>
    <About />
  </main>
);

export default Main;
