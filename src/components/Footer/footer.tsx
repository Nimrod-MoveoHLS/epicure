import * as React from "react";
// import "./footer.css";

import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  width: 100vw;
  background-color: blue;
  ul {
    list-style: none;
    text-align: center;
    font-family: HelveticaNeue;
    font-size: 1.2rem;
    padding: 0;
  }
  li {
    margin: 2vw;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

@media screen and (max-width:550px) {
  height: 126px;
  padding: 1px 0 23px;
}  
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="/" className="footer-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/" className="footer-links">
            Term Of Use
          </a>
        </li>
        <li>
          {" "}
          <a href="/" className="footer-links">
            Privacy Policy
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
