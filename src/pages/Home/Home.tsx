import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import PopularRestaurants from "../../components/PopularRest/PopularRest"
import SignatureDish from "../../components/SignatureDish/SignatureDish"
import IconMeaning from "../../components/IconsMeaning/iconMeaning";
import About from "../../components/About/About";
import WeeklyChef from "../../components/WeeklyChef/WeeklyChef";


const Home = () => {
  return (
    <HomeContainer>
      <HeroHeader />
      <PopularHeader>
        <h1>THE POPULAR RESTAURANTS IN EPICURE</h1>
      </PopularHeader>
      <PopularRestaurants/>
      <SignatureDish/>
      <RestLink>
      <Link to='/restaurants'>
      All Restaurants
          </Link>
      </RestLink>
        <IconMeaning />
      <WeeklyChef />
      <About />
    </HomeContainer>
  );
};

export default Home;



const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const PopularHeader = styled.div`
  text-align: center;
  margin-top: 15vh;
  h1{
    font-family: HelveticaNeue;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 1.25px;
  text-align: center;
  }

  @media only screen and (max-width: 550px) {
    margin-top: 5vh;
    font-family: HelveticaNeue;
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 0.93px;
  text-align: center;

h1{
    font-size: 16px;
}

  }
`;
// const PopularRestContainer = styled.div`
//   display: flex;
//   margin: 0 auto;
//   @media only screen and (max-width: 550px) {
//     display: flex;
//     margin: 0;
//     overflow-x: auto;
//   }
// `;
const RestLink = styled.div`
margin-top: 2vh;
margin-left: 70%;
font-size: 30px;
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
@media only screen and (max-width: 550px) {
    display: none;
}
`;