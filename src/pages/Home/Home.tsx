import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import PopularRestaurants from "../../components/PopularRest/PopularRest"
import SignatureDish from "../../components/SignatureDish/SignatureDish"
import IconMeaning from "../../components/IconsMeaning/iconMeaning";
import About from "../../components/About/About";
import WeeklyChef from "../../components/WeeklyChef/WeeklyChef";
import WeeklyChefRest from "../../components/WeeklyChef/WeeklyChefRest";
import FilterBtn from "../../components/FilterBtns/FilterBtn"


const Home = () => {
  return (
    <HomeContainer>
      <HeroHeader />
      <FilterBtn/>
      <PopularHeader>
        <h1>THE POPULAR RESTAURANTS IN EPICURE :</h1>
      </PopularHeader>
      <PopularRestaurants/>
      <RestLink>
      <Link to='/restaurants'>
      All Restaurants &#62;&#62;
          </Link>
      </RestLink>
      <SignatureHeader>
        <h1>SIGNATURE DISH OF :</h1>
      </SignatureHeader>
      <SignatureDish/>
        <IconMeaning />
      <WeeklyChef />
      <WeeklyChefRest/>
      <About />
    </HomeContainer>
  );
};

export default Home;



const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SignatureHeader = styled.div`
  text-align: center;
  font-size: 1.875rem;
  margin-top: 87px;
  margin-bottom: 42px;
  h1{
    font-family: HelveticaNeue;
  font-size: 1.875rem;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 1.25px;
  text-align: center;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 100px;
    margin-bottom: 13px;

h1{
  font-family: "HelveticaNeue";
  font-size: 0.875rem;
  letter-spacing: 0.93px;
  font-weight: 100;
  text-align: center;
  line-height: 1.57;
  letter-spacing: 0.93px;
}

  }

`
const PopularHeader = styled.div`
  text-align: center;
  margin-top: 140px;
  margin-bottom: 42px;
  h1{
    font-family: "HelveticaNeue";
  font-size: 1.875rem;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 1.25px;
  text-align: center;
  }

  @media only screen and (max-width: 650px) {
    margin-top: 51px;
    margin-bottom: 13px;

h1{
  font-family: "HelveticaNeue";
  font-size: 0.875rem;
  letter-spacing: 0.93px;
  font-weight: 100;
  text-align: center;
  line-height: 1.57;
  letter-spacing: 0.93px;
}

  }
`;

const RestLink = styled.div`
margin-top: 31px;
margin-left: 69%;
font-size: 1.875rem;
letter-spacing: 2px;
font-family: HelveticaNeue;
color: black;
a:link {
          text-decoration: none;
          color: black;

}
           a:visited {
         text-decoration: none;
         color: black;

}
@media only screen and (max-width: 750px) {
    display: none;
}
`;