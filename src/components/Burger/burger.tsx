import * as React from "react";
import {useState}  from 'react';
import "./burger.css";

const Burger = () => {

    const [showLinks,setShowLinks] = useState<boolean>(true)

    return (
        <div className="mobile-links" id={showLinks ? "hidden" : ""}>
        <a href="/">Restaurants</a>
          <a href="/" >Chefs</a>
          <a href ="/">Contact Us</a>
          <a href ="/">Term Of Use</a>
          <a href ="/">Privacy Policy</a>
      </div>
    )
}

export default Burger
