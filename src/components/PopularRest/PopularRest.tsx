
import * as React from "react";
import styled from "styled-components"
import Card from "../../components/Cards/Card";

const PopularRestContainer = styled.div`
  display: flex;
  margin: 0 auto;
  
  @media only screen and (max-width: 550px) {
    display: flex;
    margin: 0;
    overflow-x: auto;
  }
`
const PopularRest = () => {

    const list = [
        {
            "id":1,
            "type" : "restaraunt",
            "title": "Claro",
            "image": "../images/claro.png",
            "body": "Ran Shmueli",
            "alt" : "claro-img"
        },
        {
            "id":2,
            "type" : "restaraunt",
            "title": "Lumina",
            "image": "../images/mizlala-gret-mullet-fillet.png",
            "body": "Meir Adoni",
        },
        {
            "id":3,
            "type" : "restaraunt",
            "title": "Tiger Lilly",
            "image": "../images/tiger-lili.png",
            "body": "Yanir Green",
        }
    
    ]


    return (
        <PopularRestContainer>
        {list.map(card => {
             return (
                 <Card key={card.id} title={card.title} body={card.body} img={card.image} alt={card.alt} isRest={card.type}/>
             )
         })}
         </PopularRestContainer>
    )
}

export default PopularRest
