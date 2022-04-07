import React, { FC } from 'react';
import './Main.css';

import About from '../About/About.tsx';

interface MainProps { }

const Main: FC<MainProps> = () => (
  <div className="Main">
    <div className="hero-container">
      <img src={process.env.PUBLIC_URL + '/cypher-queenz-logo-transparent.png'} className="cypher-queenz-logo" alt="logo" />
      <h1>
        Cypher Queenz
      </h1>
      <a
        className="hero-button"
        href="https://www.instagram.com/cypherqueenz/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        IG: @cypherqueenz
      </a>
    </div>
    <About />
  </div>
);

export default Main;
