import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import {
  Wrapper,
  LeftNav,
  RightNav,
  BurgerIcon,
  LogoIcon,
  Logo,
  MenuLinks,
  SearchContainer,
  Search,
  SearchIcon,
  SearchIconMobile,
  UserIcon,
  BagIcon,
  Input
} from "./styled";
import SideMenu from "../SideMenu/SideMenu";

// import SideMenu from "../SideMenu/SideMenu"

const NavBar = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const toggle = () => {
    setIsShown(!isShown);
  };

  return (
    <Wrapper>
      <LeftNav>
        <BurgerIcon>
          <img
            onClick={toggle}
            src="../images/group-13.svg"
            alt="burger-icon"
          ></img>
        </BurgerIcon>
        <Link to='/'>
        <LogoIcon>
          <img src="../images/logo.png" alt="logo-icon"></img>
        </LogoIcon>
          </Link>
        <Logo>EPICURE</Logo>
        <MenuLinks>
          <Link to='/restaurants'>
          Restaurants
          </Link>
        </MenuLinks>
        <MenuLinks>
          <Link to='/chefs'>
          Chefs
          </Link>
        </MenuLinks>
      </LeftNav>
      <RightNav>
        <SearchContainer>
        <input
            type="text"
            placeholder="Search for restaraunt cuisine, chef"
            // value={searchKey} onChange={onChangeSearchKey}
          ></input>
            <img src="../images/search-icon.svg" alt="search-icon"></img>
        </SearchContainer>
        <SearchIconMobile>
          <img src="../images/search-icon.svg" alt="search-icon-mobile"></img>
        </SearchIconMobile>
        <UserIcon>
          <img src="../images/user-icon.svg" alt="user-icon"></img>
        </UserIcon>
        <BagIcon>
          <img src="../images/bag-icon.svg" alt="bag-icon"></img>
        </BagIcon>
      </RightNav>
      {isShown && <SideMenu setIsShown={toggle} isShown={isShown} />}
      {/* <SideMenu setIsShown={toggle} isShown={isShown}/> */}
    </Wrapper>
  );
};

export default NavBar;
