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
            Chefs
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
            <h1 className="li-border">
            All Restaurants
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
          <span >
            Contact Us
            </span>
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
          <span>
            Term Of Use
            </span>
          </Link>
        </li>
        <li>
          <Link to="/restaurants" onClick={() => setIsShown()}>
          <span>
            Privacy Policy
            </span>

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
      font-size: 2rem;
      padding: 0;
    }
    li {
      margin: 15vw;
      cursor: pointer;
h1 {
  font-weight: 100;
  padding-bottom: 8vh;
    border-bottom: solid 0.2px black;
}
      span {
      color:gray
      }
    }
.li-links{
  color: red;
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
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.3);

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
