import * as React from "react";
import styled from "styled-components";
import Card from "../../components/Cards/Card";

const WeeklyChefRest = () => {
  const list = [
    {
      id: 1,
      dish: true,
      type: "dish",
      title: "Onza",
      image: "../images/onza.png",
      alt: "onza-img",
    },
    {
      id: 2,
      dish: true,
      title: "Kitchen Market",
      type: "dish",
      image: "../images/kitchen.png",
      alt: "kitchen-img",
    },
    {
      id: 3,
      dish: true,
      title: "Mashya",
      type: "dish",
      image: "../images/mashya.png",
      alt: "mashya-img",
    },
    {
      id: 4,
      dish: true,
      title: "Mashya",
      type: "dish",
      image: "../images/mashya.png",
      alt: "mashya-img",
    },
  ];
  return (
    <Container>
      <WeeklyHeader>
        <h1>Yossi’s restaurants :</h1>
      </WeeklyHeader>
      <OwnedRestaurants>
        {list.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              img={card.image}
              alt={card.alt}
              //   isRest={card.dish}
              isSignatureDish={card.type}
            />
          );
        })}
      </OwnedRestaurants>
    </Container>
  );
};

export default WeeklyChefRest;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const OwnedRestaurants = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-left: 20%;
.card-content {
  background-color: #f9f4ea;

}
  .card-container {
    width: 231px;
    height: 357px;
    margin-bottom: 10vh;
    

    img {
      width: 231px;
      height: 224px;
      object-fit: contain;
    }
  }
  @media only screen and (max-width: 650px) {
    display: flex;
    margin: 0;
    width: 100%;

    overflow-x: auto;
    .card-container {
      width: 153.6px;
      height: 237.4px;
      margin-bottom: 10vh;

      img {
        width: 153.6px;
        height: 149px;
        object-fit: contain;
      }
    }
  }
`;

const WeeklyHeader = styled.section`
  display: flex;
  width: 100%;

  h1 {
    margin-bottom: 2vh;
    font-family: HelveticaNeue;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;
    color: black;
    margin-left: 20%;
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
      margin-left:5%
    }
  }
`;
