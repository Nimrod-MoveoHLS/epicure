import * as React from "react";
// import "./footer.css";

import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 94px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, .1);
  /* position: absolute;
  bottom: 0; */

  justify-content: center;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;  
  }
  li {
    margin-right:45px;
    justify-content: center;
    margin-top:37px;


  }
  a {
    font-size: 1.125rem;

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
    display: flex;
    width: 100%;
    ul {
      display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;   
    }
    li{
      margin:0;
      justify-content: space-between;
      margin: 0 7px 18px 8px;

    }
    a{
      font-size:0.75rem;
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
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
