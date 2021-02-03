
import * as React from "react";
import styled from "styled-components"
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

const PopularRestContainer = styled.div`
  display: flex;
  margin: 0 auto;
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
  @media only screen and (max-width: 650px) {
    display: flex;
    margin: 0;
    overflow-x: auto;
.card-container{
  width:206px
}
    .card-content{
      width: 206px;
    }
  }
`
const PopularRest = () => {

    const list = [
        {
            "id":1,
            "isPopular" : true,
            "title": "Claro",
            "image": "../images/claro.png",
            "body": "Ran Shmueli",
            "alt" : "claro-img"
        },
        {
            "id":2,
            "isPopular" : true,
            "title": "Lumina",
            "image": "../images/mizlala-gret-mullet-fillet.png",
            "body": "Meir Adoni",
        },
        {
            "id":3,
            "isPopular" : true,
            "title": "Tiger Lilly",
            "image": "../images/tiger-lili.png",
            "body": "Yanir Green",
        }
    
    ]


    return (
        <PopularRestContainer>
        {list.map(card => {
             return (
                <Link key={card.id} to={`/restaurants/${card.id}`}>

                 <Card key={card.id} title={card.title} body={card.body} img={card.image} alt={card.alt} isPopular={card.isPopular}/>
                 </Link>
             )
         })}
         </PopularRestContainer>
    )
}

export default PopularRest
