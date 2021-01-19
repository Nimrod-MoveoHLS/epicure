import * as React from "react";
import {useState}  from 'react';
import "./navBar.css";
// import Burger from "../Burger/burger"
const NavBar = () => {

  const [showLinks,setShowLinks] = useState<boolean>(true)

  return (
    <section className="navbar-container">
      <img onClick ={() => setShowLinks(!showLinks)} src="../images/group-13.png" className="burger-icon" alt="burger-icon"></img>

    {/* <Burger /> */}
      <div className="left-nav">
        <img src="../images/logo.png" className="logo-icon" alt="logo-icon"></img>
        <div className="logo">EPICURE</div>
        <a href="/" className="menu-link">Restaurants</a>
        <a href="/" className="menu-link">Chefs</a>
      </div>

      <div className="right-nav">
        <div className="search-container">
          <input type="text" placeholder="Search for restaurant cuisne, chef" className="search"></input>
          <img src="../images/search-icon.png" className="search-icon" alt="search-icon"></img>
        </div>
        <img src="../images/search-icon.png" className="search-icon-mobile" alt="search-icon-mobile"></img>
        <img src="../images/user-icon.png" className="user-icon" alt="user-icon"></img>
        <img src="../images/bag-icon.png" className="bag-icon" alt="bag-icon"></img>
      </div>
    </section>
  );
};

export default NavBar;
