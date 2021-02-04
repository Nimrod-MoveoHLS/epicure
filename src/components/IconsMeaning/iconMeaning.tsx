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
width: auto;
  opacity: 0.9;
  background-color: #fafafa;
  align-items: center;
  text-align: center;
margin-top: 87px;
  h2 {
    margin-top: 41px;
    margin-bottom: 29.4px;
    font-family: HelveticaNeue;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1.33;
  letter-spacing: 1.25px;
  text-align: center;
  }

  @media only screen and (max-width: 650px) {
    height: 134px;
    opacity: 0.9;
    margin-top: 95.1px;

    h2 {
      margin-bottom: 22px;
      margin-top: 16px;
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
  /* justify-content: space-between; */
  justify-content: space-between;
   align-items: center;
  margin-right: 33.71%;
margin-left:33.71%;
img{
  margin-bottom: 29.4px;
}
@media only screen and (max-width: 650px) {
  margin-right: 18.4%;
margin-left: 18.4%;
img{
  margin-bottom: 16px;
}
}
`;

const SpicyIcon = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 80px;
    height: 61px;
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
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 29.4px;

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
      object-fit: contain;
      margin-bottom: 16px;

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
      height: 37px;    }
    p {
      font-size: 13px;
    }
  }
`;
