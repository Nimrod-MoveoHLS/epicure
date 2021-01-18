import React from "react";
import "./navBar.css";
const navBar = () => {
  return (
    <section className="navbar-container">
      <img
        src="../images/group-13.png"
        className="burger-icon"
        alt="burger-icon"
      ></img>

      <img src="../images/logo.png" className="logo-icon" alt="logo-icon"></img>
      <div className="logo">Epicure</div>
      <a href="/" className="menu-link">
        Restaurants
      </a>
      <a href="/" className="menu-link">
        Chefs
      </a>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurant cuisne, chef"
          className="search"
        ></input>
        <img
          src="../images/search-icon.png"
          className="search-icon"
          alt="search-icon"
        ></img>
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
    </section>
  );
};

export default navBar;
