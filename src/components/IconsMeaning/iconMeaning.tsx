import * as React from "react";
import styled from "styled-components";

const iconMeaning = () => {
  return (
    <MeaningContainer>
      <h2>THE MEANING OF OUR ICONS:</h2>

      <IconsGroup>
        <SpicyIcon>
          <img src="../images/spicy-icon.svg" alt="spicy-icon"></img>
          <p>Spicy</p>
        </SpicyIcon>
        <VegetarianIcon>
          <img src="../images/vegetarian.svg" alt="vegetarian-icon"></img>
          <p>Vegetarian</p>
        </VegetarianIcon>
        <VeganIcon>
          <img src="../images/vegan-icon.svg" alt="vegan-icon"></img>
          <p>Vegan</p>
        </VeganIcon>
      </IconsGroup>
    </MeaningContainer>
  );
};

export default iconMeaning;

const MeaningContainer = styled.section`
  height: 265px;
  padding-left:25%;
  padding-right:25%;
  opacity: 0.9;
  background-color: #fafafa;
  align-items: center;
  text-align: center;
  margin-top: 7vh;

  h2 {
    margin-bottom: 2vh;
    font-family: HelveticaNeue;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 1.25px;
  text-align: center;
  }

  @media only screen and (max-width: 650px) {
    height: 134px;
    padding: 0;
    opacity: 0.9;
    background-color: #fafafa;
    margin-top: 5vh;
    width: 80vw;
    margin: 0 auto;

    h2 {
      margin-bottom: 2vh;
      margin-top: 4vh;
      font-family: HelveticaNeue;
  font-size: 1rem;
  font-weight: 100;
  letter-spacing: 0.93px;
  text-align: center;
    }
  }
`;

const IconsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpicyIcon = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 80px;
    height: 61px;
    margin: 0 0 29px;
    object-fit: contain;
  }
  p {
    text-align: center;
    height: 28px;
    font-family: HelveticaNeue;
    font-size: 23.4px;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 44px;
      height: 34px;
      margin: 0 0 16px;
      object-fit: contain;
    }
    p {
      font-size: 14px;
    }
  }
`;

const VegetarianIcon = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 60px;
    height: 60px;
    margin: 0 26.8px 30px 25.2px;
    object-fit: contain;
  }
  p {
    text-align: center;
    height: 28px;
    font-family: HelveticaNeue;
    font-size: 23.4px;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 33px;
      height: 34px;
      margin: 0 15px 16px;
      object-fit: contain;
    }
    p {
      font-size: 13px;
    }
  }
`;

const VeganIcon = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 67px;
    height: 67px;
    margin: 0 2.9px 26.6px 5.1px;
    object-fit: contain;
  }
  p {
    text-align: center;
    height: 28px;
    font-family: HelveticaNeue;
    font-size: 23.4px;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 37px;
      height: 37px;
      margin: 0 2px 15px 3px;
    }
    p {
      font-size: 13px;
    }
  }
`;
