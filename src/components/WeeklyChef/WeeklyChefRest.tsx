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
  ];
  return (
    <Container>
      <WeeklyContainer>
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
      </WeeklyContainer>
    </Container>
  );
};

export default WeeklyChefRest;

const WeeklyContainer = styled.div`
    margin-right:15.57%;
  margin-left:15.57%;
  @media only screen and (max-width: 650px) {
    margin: 0 0 0 20px
  }

`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const OwnedRestaurants = styled.div`
  display: flex;
  width: 100%;
.card-content {
  background-color: #f9f4ea;
  height: 133px;
  justify-content: space-around;

}
  .card-container {
    width: 231px;
    height: 357px;
    margin-right:20px;

    img {
      width: 231px;
  height: 223px;
      object-fit: contain;
    }
    .signature-image{
      height: 223px;

      img {
      width: 231px;
  height: 223px;
      object-fit: contain;
    }
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
      margin-right:13.3px;


      .signature-image{
        height: 149px;
      img {
        width: 153.6px;
        height: 149px;
        object-fit: contain;
      }
    }
    .card-content {
      height: 88px;
      h2{
        font-size:1.25rem;
        letter-spacing: 1.33px;
        font-family: HelveticaNeue;

      }
    }
   
    }
  }
`;

const WeeklyHeader = styled.section`
  display: flex;
  width: 100%;

  h1 {
    margin-top:59px;
    margin-bottom:23px;
    font-family: HelveticaNeue;
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2px;
    text-align: center;
    color: black;
  }

  @media only screen and (max-width: 650px) {
    width: 100%;
    align-items: center;
    h1 {
      font-family: HelveticaNeue;
      font-size: 0.875rem;
      font-weight: 100;
      letter-spacing: 0.88px;
      text-align: center;
      /* margin-left:5% */
    }
  }
`;
