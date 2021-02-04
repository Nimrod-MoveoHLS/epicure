import * as React from "react";
import styled from "styled-components";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

const Container = styled.div`
margin-right: 12.07%;
margin-left:12.07%;
@media only screen and (max-width: 650px) {
  margin-left:20px;
  margin-right:0;
}
`
const PopularRestContainer = styled.div`
  display: flex;
  margin: 0 auto;
  
  .card-container {
    margin-right: 11px;

  }
  .card-content {
    width: 360px;
    height: 133px;
    background-color: #f9f4ea;
    h2 {
      font-size: 2.5rem;
    }
    p {
      margin-top: 3.8px;
    }
  }

  @media only screen and (max-width: 650px) {
    display: flex;
    margin: 0;
    overflow-x: auto;
    
    .card-container {
      width: 206px;
      height: 338px;
      margin-right:14px;

      img {
        width: 206px;
  height: 224px;
      }
    }
    .card-content {
      width: 206px;
      height: 114px;
      background-color: #f7e0b2;
      h2{
        /* margin-top:58px; */
        font-family: HelveticaNeue;
        font-size:1.563rem;
  letter-spacing: 1.67px;
      }
      p{
        font-size:1.25rem;
        letter-spacing: 1.33px;

      }
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
`;
const PopularRest = () => {
  const list = [
    {
      id: 1,
      isPopular: true,
      title: "Claro",
      image: "../images/claro.png",
      body: "Ran Shmueli",
      alt: "claro-img",
    },
    {
      id: 2,
      isPopular: true,
      title: "Lumina",
      image: "../images/mizlala-gret-mullet-fillet.png",
      body: "Meir Adoni",
    },
    {
      id: 3,
      isPopular: true,
      title: "Tiger Lilly",
      image: "../images/tiger-lili.png",
      body: "Yanir Green",
    },
  ];

  return (
    <Container>

   
    <PopularRestContainer>
      {list.map((card) => {
        return (
          <Link key={card.id} to={`/restaurants/${card.id}`}>
            <Card
              key={card.id}
              title={card.title}
              body={card.body}
              img={card.image}
              alt={card.alt}
              isPopular={card.isPopular}
            />
          </Link>
        );
      })}
    </PopularRestContainer>
    </Container>
  );
};

export default PopularRest;
