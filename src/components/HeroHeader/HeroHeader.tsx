import * as React from "react";
import "./heroHeader.css";

const HeroHeader = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Epicure works with the top chef restaurants in Tel Aviv</h1>
        <div className="search-container-hero">
          <img
            src="../images/search-icon.png"
            className="search-icon"
            alt="search-icon"
          ></img>
          <input className="input-text"
            type="text"
            placeholder="Search for retaraunt cuisine, chef"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
