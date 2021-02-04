import styled from "styled-components";

export const Wrapper = styled.section`
  height: 62px;
  background-color: white;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 750px) {
    width: 100vw;
    height: 45px;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left:8.78vw;
  @media (max-width: 750px) {
    margin-left:5.14%
;
  }
`;

export const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right:8.78vw;
  @media (max-width: 750px) {
    margin-right:5.14%
;
  }
`;

export const BurgerIcon = styled.div`
  display: none;

  @media (max-width: 750px) {
    display: block;
    justify-content: center;
    width: 18px;
    height: 14px;
    object-fit: contain;
    /* margin: 7px 36vw 6px 25px; */
  }
`;
export const LogoIcon = styled.div`
  width: 33px;
  height: 33px;
  object-fit: contain;
  margin: 0 15px 1px 0;

  @media (max-width: 750px) {
    margin: 0;

    img {
      width: 31px;
    height: 30px;
    object-fit: contain;
    position: absolute;
    left: calc(50% - 15px);
    margin-right:46px
        }

  }
`;

export const Logo = styled.div`
  font-family: HelveticaNeue;
  font-size: 1.6875rem;
  font-weight: 100;
  letter-spacing: 1.35px;
  color: black;
  margin-right:2.15vw;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const MenuLinks = styled.div`
  text-decoration: none;
  font-family: HelveticaNeue;
margin-right:1.94vw;
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
         color: black;
}
a:active {
  padding-bottom: 10px;
  border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);  }
  a:focus {
    padding-bottom: 10px;
  border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 29.64vw;
  height: 34px;
align-items:center;
  object-fit: contain;
  border-radius: 4px;
  border: solid 0.5px black;
  background-color: rgba(255, 255, 255, 0.11);

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    margin-right: 13px
  }
  input {
    opacity: 0.8;
    width: 100%;
    border: none;
    background-color: transparent;
    object-fit: contain;
    border-radius: 4px;
    font-family: HelveticaNeue;
    font-size: 1.125rem;
    font-weight: 100;
    letter-spacing: 1.29px;
    color: black;
    margin-left: 16px;
    :focus {
    outline: none;
  }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Search = styled.div`
  width: 100%;
  border: none;
  opacity: 0.8;
  font-family: HelveticaNeue;
  font-size: 1.125rem;
  font-weight: 100;
  letter-spacing: 1.29px;
  text-align: center;
  color: black;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 99%;
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
  @media (max-width: 750px) {
    img{
      width: 18px;
    height: 18px;
    object-fit: contain;
    }
 
  }
`;

export const SearchIconMobile = styled.div`
  display: none;

  @media (max-width: 750px) {
    img {
      width: 18px;
    height: 18px;
    object-fit: contain;
    }
    display: block;
   
  }
`;

export const UserIcon = styled.div`
img{
  margin-left: 28px;
  margin-right: 28px;
  object-fit: contain;
}

  @media (max-width: 750px) {

  img{
    margin-left: 26px;
  margin-right: 26px;
    width: 18px;
    height: 18px;
    object-fit: contain;
  }
  }
`;

export const BagIcon = styled.div`
img{
  width: 22px;
  height: 22px;
  object-fit: contain;
}
  

  @media (max-width: 750px) {
    img{
    width: 18px;
    height: 18px;
    /* margin-right: 31px; */
    object-fit: contain;
    }
  }
`;
