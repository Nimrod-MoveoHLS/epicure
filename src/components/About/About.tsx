import * as React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="main-title">About Us</h1>
        <h2 className="main-pargraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Snsequuntur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Snsequuntur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Snsequuntur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Snsequuntur?
        </h2>

        <div className="download-btns">
          <div className="apple-download">
            <img
              src="../images/shape.png"
              className="apple-logo"
              alt="apple-logo"
            ></img>
            <div className="download-text">
              <h2>Download on the</h2>
              <h1>App Store</h1>
            </div>
          </div>
          <div className="google-download">
            <img
              src="../images/path.png"
              className="google-logo"
              alt="google-logo"
            ></img>
            <div className="download-text">
              <h2>Get it on</h2>
              <h1>Google Play</h1>
            </div>
          </div>
        </div>
      </div>
      <img
        src="../images/about-logo.png"
        className="about-logo"
        alt="about-logo"
      ></img>
    </div>
  );
};

export default About;
