import * as React from "react";
import styled from "styled-components";
// import "./restaurantCard.css";

const RestarauntContainer = styled.section`
  width: 360px;
  overflow: hidden;
  margin: 1vh;
  @media only screen and (max-width: 550px) {
    width: 206px;
    overflow: visible;
  }
`;

const RestImage = styled.div`
  img {
    /* overflow: hidden; */
    height: 224px;
  }

  @media only screen and (max-width: 550px) {
    img {
      width: 206px;
      height: 224px;
      object-fit: cover;
    }
  }
`;

const RestContent = styled.div`
  background-color: #f9f4ea;
  text-align: center;
  font-family: HelveticaNeue;
  height: auto;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 20px;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    letter-spacing: 1.67px;
    padding-bottom: 20px;
  }
`;

const restaurantCard = () => {
  return (
    <RestarauntContainer>
      <RestImage>
        <img
          src="../images/claro.png"
          className="claro-img"
          alt="claro-img"
        ></img>
      </RestImage>
      <RestContent>
        <h2>Claro</h2>
        <p>Ran Shmueli</p>
      </RestContent>
    </RestarauntContainer>
  );
};

export default restaurantCard;
