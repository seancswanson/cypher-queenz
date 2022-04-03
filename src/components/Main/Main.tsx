import React, { FC } from 'react';
import './Main.css';

import About from '../About/About.tsx';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className="Main">
    <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/cypher-queenz-logo-cropped.png'} className="cypher-queenz-logo" alt="logo" />
        <p>
          Cypher Queenz
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/cypherqueenz/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG: @cypherqueenz
        </a>
      </header>
      <About />
  </div>
);

export default Main;
