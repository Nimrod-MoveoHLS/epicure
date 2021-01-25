import * as React from "react";
import styled from "styled-components";



export interface CardProps {
  title: string;
  img: string;
  alt?: string;
  body?: string;
  icon?: string;
  price?: number;
  restaraunt?: string;
  isDish?: string;
  isRest?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  body,
  icon,
  price,
  alt,
  restaraunt,
  isDish,
  isRest,
}) => {
  return (
    <RestarauntContainer>
      {isDish && (
        <DishImage>
          <img src={img} alt={alt}></img>
        </DishImage>
      )}

      {isRest && (
        <RestImage>
          <img src={img} alt={alt}></img>
        </RestImage>
      )}
      <RestContent>
        <h2>{title}</h2>
        <p>{body}</p>
        {icon && (
          <Icon>
            <img src={icon}></img>
          </Icon>
        )}
        {/* {price && <Price><hr></hr></Price>} */}
        {price && <Price>₪ {price}</Price>}
      </RestContent>
    </RestarauntContainer>
  );
};

export default Card;


const RestarauntContainer = styled.section`
  width: 360px;
  overflow: hidden;
  margin: 1vh;

  @media only screen and (max-width: 550px) {
    width: 259.2px;
    overflow: visible;
  }
`;

const RestImage = styled.div`
  img {
    width: 360px;
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
const DishImage = styled.div`
  img {
    width: 360px;
    height: 290px;
  }

  @media only screen and (max-width: 550px) {
    img {
      width: 259.2px;
      height: 208.8px;
      object-fit: cover;
    }
  }
`;

const RestContent = styled.div`
  background-color: #f9f4ea;
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 250px;

  h2 {
    margin-top: 0;
    margin-bottom: 2vh;
    padding-top: 20px;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    letter-spacing: 1.67px;
    padding-bottom: 20px;
    width: 80%;
    margin-top: 2vh;
    margin: 0 auto;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 550px) {
    height: 250px;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Icon = styled.div`
  img {
    width: 39px;
    height: 30px;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 3vh;
  }
`;

const Price = styled.div`

hr {
    border: none;
    margin: 0 auto;
    width: 50%;
    border-top: 1px solid black;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin-bottom: 2vh;

}

hr:after {
  background-color: #f9f4ea;
    content: '5';
    padding: 0 4px;
    position: relative;
    top: -13px;
}
   width: 100%;
  font-size: 24.9px;
  font-weight: 100;
  @media only screen and (max-width: 550px) {
    font-size: 16px;
  } 
`;