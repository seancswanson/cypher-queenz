import React, { FC } from "react";
import "./Partners.css";

interface AboutProps {}

const Partners: FC<AboutProps> = () => (
  <div className="Partners">
    <h2>Partners</h2>
    <h3 className="partner-title">Cypher Queenz is proud to partner with:</h3>
    <div className="partners-logo-container">
      <a href="https://www.206zulu.org/">
        <img src={process.env.PUBLIC_URL + "/206_zulu_logo.png"} className="zulu-logo" alt="206 Zulu Logo" />
      </a>
      <a href="https://www.thegoodfootarts.org/">
        <img src={process.env.PUBLIC_URL + "/Goodfoot-Logo-White.png"} className="goodfoot-logo" alt="Goodfoot Logo" />
      </a>
    </div>
  </div>
);

export default Partners;
