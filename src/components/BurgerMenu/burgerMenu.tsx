import * as React from "react";
import { useState } from 'react';
import "./burgerMenu.css";

interface AppProps {
  setIsShown(): void;
}
const Burger: React.FC<AppProps> = (props) => {
  const { setIsShown } = props;

  return (
    <div className="mobile-menu-links">
      <img onClick={() => setIsShown} src="../images/x.svg" className="x-icon" alt="burger-icon"></img>
      <ul>
        <li> <a href="/">Restaurants</a></li>
        <li> <a href="/">Chefs</a></li>
        <li> <a href="/">Contact Us</a></li>
        <li> <a href="/">Term Of Use</a></li>
        <li> <a href="/">Privacy Policy</a></li>
      </ul>

    </div>
  )
}

export default Burger
