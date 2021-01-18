import React from "react";
import "./navBar.css";
const navBar = () => {
  return (
    <div className="navBar-container">
      <img src="../images/logo.png" className="logo-icon" alt="logo-icon"></img>
      <div className="logo">Epicure</div>
      <a href="/" className="menu-link">
        Restaurants
      </a>
      <a href="/" className="menu-link">
        Chefs
      </a>
      <div className="search-container search-icon">
        <input
          type="text"
          placeholder="Search for restaurant cuisne, chef"
          className="search"
        ></input>
      </div>
      <img
        src="../images/user-icon.png"
        className="user-icon"
        alt="user-icon"
      ></img>
      <img
        src="../images/bag-icon.png"
        className="bag-icon"
        alt="bag-icon"
      ></img>
    </div>
  );
};

export default navBar;
