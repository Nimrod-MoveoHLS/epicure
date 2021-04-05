import * as React from "react";
import styled from "styled-components";
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
    </WeeklyContainer>
  );
};

export default WeeklyChef;
const WeeklyContainer = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  @media only screen and (max-width: 650px) {
    width: 100%;
    align-items: center;
    margin-top: 71px;

  }
`;
const WeeklyHeader = styled.section`
  display: flex;
  justify-content: center;

  h1 {
    font-family: HelveticaNeue;
    font-size: 1.875rem;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;
    color: black;
    margin-bottom:37px
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    align-items: center;
    h1 {
      font-family: HelveticaNeue;
      font-size: 1rem;
      font-weight: 100;
      letter-spacing: 0.93px;
      text-align: center;
      margin-bottom:16px;

    }
  }
`;
const WeeklyContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    margin-right:15.57%;
  margin-left:15.57%;
  p {
    width: 50%;
    /* height: 292px; */
    font-family: HelveticaNeue;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 1.2;
    letter-spacing: 1.08px;
    text-align: justify;
    color: black;
  }
  img {
    width: 433px;
    height: 338px;
    object-fit: contain;
    margin-right:63px;
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    /* display: none; */

    p {
      width: 99%;
      /* max-width: 325px; */
      font-family: HelveticaNeue;
      font-size: 0.844rem;
      font-weight: 100;
      letter-spacing: 1.04px;
      text-align: center;
      align-items: center;
      line-height: 1.4;

    }
    img {
      width: 334px;
      height: 239.4px;
      object-fit: contain;
      margin-right:0;

    }
  }
`;


