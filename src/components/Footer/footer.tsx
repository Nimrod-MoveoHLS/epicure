import * as React from "react";
// import "./footer.css";

import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  width: 100vw;

  justify-content: center;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    text-align: center;
    font-family: HelveticaNeue;
    font-weight: 100;
    font-size: 1.2rem;
    padding: 0;
  }
  li {
    margin: 2vw;
    font-size: 1rem;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 650px) {
    height: 126px;
    padding: 1px 0 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Term Of Use</a>
        </li>
        <li>
          {" "}
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
