import styled from "styled-components";

export const Wrapper = styled.section`
  height: 53px;
  background-color: white;
  padding-top: 14px;
  padding-bottom: 5px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 650px) {
    width: 100vw;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BurgerIcon = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: block;
    justify-content: center;
    width: 18px;
    height: 14px;
    object-fit: contain;
    margin: 7px 140px 6px 25px;
  }
`;
export const LogoIcon = styled.div`
  width: 33px;
  height: 33px;
  object-fit: contain;
  margin: 0 15px 1px 0;

  @media (max-width: 650px) {
    width: 31px;
    height: 30px;
    object-fit: contain;
  }
`;

export const Logo = styled.div`
  font-family: HelveticaNeue;
  font-size: 1.6875rem;
  font-weight: 100;
  letter-spacing: 1.35px;
  color: black;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MenuLinks = styled.div`
  text-decoration: none;
  font-family: HelveticaNeue;
  margin: 7px 28px 6px 31px;
  font-size: 1.125rem;
  font-weight: 100;
  letter-spacing: 1.92px;
  color: black;
  a:link {
          text-decoration: none;
          color: black;

}
           a:visited {
         text-decoration: none;
         color: black;
}
           a:hover {
         text-decoration: none;
         color: darkgreen;
}

  @media (max-width: 650px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 415px;
  padding: 7px 13px 5px 16px;
  object-fit: contain;
  border-radius: 4px;
  border: solid 0.5px black;
  background-color: rgba(255, 255, 255, 0.11);

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Search = styled.div`
  width: 100%;
  height: 21px;
  border: none;
  opacity: 0.8;
  font-family: HelveticaNeue;
  font-size: 1.125rem;
  font-weight: 100;
  letter-spacing: 1.29px;
  text-align: center;
  color: black;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 90%;
  border: none;
  font-size: 20px;

  :focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  width: 22px;
  height: 22px;
  object-fit: contain;
`;

export const SearchIconMobile = styled.div`
  display: none;

  @media (max-width: 650px) {
    display: block;
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

export const UserIcon = styled.div`
  width: 23px;
  margin-left: 28px;
  margin-right: 28px;
  object-fit: contain;

  @media (max-width: 650px) {
    margin-left: 18px;
    margin-right: 18px;
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
`;

export const BagIcon = styled.div`
  width: 22px;
  object-fit: contain;

  @media (max-width: 650px) {
    width: 18px;
    height: 18px;
    margin-right: 31px;
    object-fit: contain;
  }
`;
