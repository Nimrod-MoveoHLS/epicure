import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface AppProps {
  setIsShown(): void;
  isShown: boolean;
}

const Burger: React.FC<AppProps> = (props) => {
  const { setIsShown, isShown } = props;

  return (
    <MenuContainer isShown={isShown}>
      <ClosingMenu>
        <img
          onClick={() => setIsShown()}
          src="../images/x.svg"
          alt="burger-icon"
        ></img>
      </ClosingMenu>
      <ul>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            Restaurants
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            Chefs
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            Term Of Use
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Burger;

const MenuContainer = styled.div<{ isShown: boolean }>`
  @media only screen and (max-width: 1450px) {
    transition: 0.3 ease-in-out;
    display: none;
  }
  @media only screen and (max-width: 550px) {
    display: ${(props) => (props.isShown ? "flex" : "none")};
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100%;
    background: #ffffff;
    flex-direction: column;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;

    ul {
      list-style: none;
      text-align: center;
      font-family: HelveticaNeue;
      font-size: 2.25rem;
      padding: 0;
    }
    li {
      margin: 15vw;
      cursor: pointer;
    }

    a:link {
      text-decoration: none;
      color: black;
    }
    a:visited {
      text-decoration: none;
      color: black;
    }
  }
`;

const ClosingMenu = styled.div`
  padding: 30px;
  width: 100%;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    position: absolute;
    top: 0px;
    top: 4vh;
    left: 6vw;
  }
`;
