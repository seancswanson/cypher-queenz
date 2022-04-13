import React, { FC } from "react";
import "./Main.css";

import About from "../About/About.tsx";
import Partners from "../Partners/Partners.tsx";

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className="Main">
    <div className="hero-container">
      <div className="hero-logo-container">
        <img src={process.env.PUBLIC_URL + "/cypher-queenz-logo-transparent.png"} className="cypher-queenz-logo" alt="logo" />
      </div>
      <video autoPlay playsInline muted loop id="myVideo">
        <source src={process.env.PUBLIC_URL + "/cypher-queenz-video-compressed.mp4"} type="video/mp4" />
      </video>
      <h1>@CypherQueenz</h1>
      <h2>A Seattle-based Bgirl organization highlighting unity, justice, and the female voice in Hip Hop.</h2>
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
    <Partners />
  </main>
);

export default Main;
