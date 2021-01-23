import * as React from "react";
import styled from "styled-components";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import PopularRestaurants from "../../components/Cards/restaurantCard";
import SignatureDish from "../../components/Cards/dishCard";
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
      <PopularRest>
        <PopularRestaurants />
        <PopularRestaurants />
        <PopularRestaurants />
      </PopularRest>
      <RestLink>
        <a href="/">All Restaurants</a>
      </RestLink>
      <div className="icon-meaning">
        <IconMeaning />
      </div>
      {/* <WeeklyChef /> */}
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
  font-size: 30px;
  font-weight: 100;
  line-height: 1.57;
  letter-spacing: 0.93px;
  text-align: center;
  color: black
  }

  @media only screen and (max-width: 550px) {
    margin-top: 5vh;

h1{
    font-size: 16px;
}

  }
`;
const PopularRest = styled.div`
  display: flex;
  margin: 0 auto;
  @media only screen and (max-width: 550px) {
    display: flex;
    margin: 0;

    overflow-x: auto;
  }
`;
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