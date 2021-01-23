import * as React from "react";
import styled from "styled-components";
import PopularRestaurants from "../../components/Cards/restaurantCard";

const WeeklyContainer = styled.section`
 width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 5vh;
`;
const WeeklyHeader = styled.section`
  display: flex;
  justify-content: center;

  h1 {
    margin-bottom: 5vh;
    font-family: HelveticaNeue;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;
    color: black;
  }
`;
const WeeklyContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  p {
    width: 540px;
    height: 292px;
    font-family: HelveticaNeue;
    font-size: 25px;
    line-height: 1.2;
    letter-spacing: 1.08px;
    text-align: justify;
    color: black;
  }
  img {
    width: 433px;
    height: 338px;
    object-fit: contain;
  }
`;


const WeeklyChefRest = styled.div`

`
const WeeklyChef = () => {
  return (
    <WeeklyContainer>
      <WeeklyHeader>
        <h1>CHEF OF THE WEEK:</h1>
      </WeeklyHeader>
      <WeeklyContent>
        <img
          src="../images/group-15.png"
          className="yossi-shitrit-img"
          alt="yossi-shitrit-img"
        ></img>
        <p>
          Chef Yossi Shitrit has been living and breathing his culinary dreams
          for more than two decades, including running the kitchen in his first
          restaurant, the fondly-remembered Violet, located in Moshav Udim.
          Shitrit's creativity and culinary acumen born of long experience are
          expressed in the every detail of each and every dish.
        </p>
      </WeeklyContent>
      <WeeklyChefRest>
      </WeeklyChefRest>
    </WeeklyContainer>
  );
};

export default WeeklyChef;
