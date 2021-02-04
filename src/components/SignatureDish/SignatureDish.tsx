import * as React from "react";
import styled from "styled-components";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

const Container = styled.div`
margin-right: 12.07%;
margin-left:12.07%;
@media only screen and (max-width: 750px) {
  margin-left:20px;
  margin-right:0;
}
`

const SignatureDishContainer = styled.div`
  display: flex;
  margin: 0 auto;

.card-container {
  margin-right: 11px;

}
  .card-content {
    width: 360px;
    height: 364px;
    background-color: #f9f4ea;
    justify-content: space-between;
    h2 {
      margin: 0 auto;
      margin-top: 16px;
      width: 50%;
      font-size: 2.4rem;
      align-items: center;
      line-height: 1.23;
    }
    p {
      width: 85%;
    }
    .card-price {
      margin-bottom: 11px;
      font-size: 1.556rem;
    }
  }

  a:link {
    text-decoration: none;
    color: black;
  }
  a:visited {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: none;
    color: black;
  }
  @media only screen and (max-width: 750px) {
    display: flex;
    margin: 0;
    overflow-x: auto;
    .card-header {
      h1 {
        font-size: 1rem;
        /* margin-left: */
        margin-bottom: 13px;
      }
    } 
    .signature-image{
      width: 259.2px;
  height: 208.8px;
    }
    .card-container {
      width: 259.2px;
  /* height: 470.9px; */

  img {
    width: 259.2px;
  height: 208.8px;
  }
    }
    .card-content{
      width: 259.2px;
  height: 262.1px;
  background-color: #f7e0b2;

  h2{
    font-size:1.725rem;
    height: 33%;
  }
  p{
    font-size:1.081rem;
    line-height: 1.2;
  letter-spacing: 1.15px;
  height: 33%;

  }
  img {
    width: 39px;
  height: 30px;
  }
  .card-price {
    margin-top:8px;
    margin-bottom: 6.9px;
      hr{
/* background-color: black; */
      }
      hr:after{
        background-color: #f7e0b2;
        font-size: 1.563rem;
;
      }
    }
    }
  }
`;
const SignatureDish = () => {
  const list = [
    {
      id: 5,
      type: "dish",
      restaraunt: "Tiger Lilly",
      title: "Pad Ki Mao",
      image: "../images/padkimao.png",
      body:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      alt: "Pad Ki Mao",
      price: 88,
      icon: "../images/group-2.svg",
    },
    {
      id: 2,
      type: "dish",
      restaraunt: "Kab Kem",
      title: "Garbanzo Frito",
      image: "../images/Garbanzo.png",
      body:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      alt: "Garbanzo Frito",
      price: 98,
    },
    {
      id: 7,
      type: "dish",
      restaraunt: "Lumina",
      title: "Smoked Pizza",
      image: "../images/smokedPizza.png",
      body: "Basil dough, cashew butter, demi-glace, bison & radish",
      alt: "Smoked Pizza",
      price: 65,
      icon: "../images/group-7-copy.png",
    },
  ];

  return (
    <Container>
      <SignatureDishContainer>
        {list.map((card) => {
          return (
            <Link key={card.id} to={`/restaurants/${card.id}`}>
              <Card
                key={card.id}
                title={card.title}
                body={card.body}
                img={card.image}
                alt={card.alt}
                restaraunt={card.restaraunt}
                price={card.price}
                icon={card.icon}
                isSignatureDish={card.type}
              />
            </Link>
          );
        })}
      </SignatureDishContainer>
    </Container>
  );
};

export default SignatureDish;
