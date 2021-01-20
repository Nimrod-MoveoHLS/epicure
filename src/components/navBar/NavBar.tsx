import * as React from "react";
import { useState } from 'react';
import "./navBar.css";
import BurgerMenu from "../BurgerMenu/burgerMenu"
const NavBar = () => {

  const [isShown, setIsShown] = useState<boolean>(false)

  const handleClick = () => {
    setIsShown(!isShown) 
   }

  return (
    <section className="navbar-container">
      <img onClick={handleClick} src="../images/group-13.png" className="burger-icon" alt="burger-icon"></img>
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
      {isShown && <BurgerMenu setIsShown={handleClick}/>}
    </section>
  );
};

export default NavBar;
