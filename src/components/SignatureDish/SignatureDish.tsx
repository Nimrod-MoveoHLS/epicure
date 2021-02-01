
import * as React from "react";
import styled from "styled-components"
import Card from "../../components/Cards/Card";

const SignatureDishContainer = styled.div`
  display: flex;
  margin: 0 auto;
  @media only screen and (max-width: 550px) {
    display: flex;
    margin: 0;
    overflow-x: auto;
  }
`
const SignatureDish = () => {

    const list = [
        {
            "id":1,
            "type": "dish",
            "restaraunt": "Tiger Lilly",
            "title": "Pad Ki Mao",
            "image": "../images/padkimao.png",
            "body": "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
            "alt" : "Pad Ki Mao",
            "price": 88,
            "icon":"../images/group-2.svg"
        },
        {
            "id":2,
            "type": "dish",
            "restaraunt": "Kab Kem",
            "title": "Garbanzo Frito",
            "image": "../images/Garbanzo.png",
            "body": "Polenta fingers, veal cheek,magic chili cured lemoncream, yellow laksa",
            "alt" : "Garbanzo Frito",
            "price": 98,
        },
        {
            "id":3,
            "type": "dish",
            "restaraunt": "Popina",
            "title": "Pad Ki Mao",
            "image": "../images/smokedPizza.png",
            "body": "Basil dough, cashew butter, demi-glace, bison & radish",
            "alt" : "Pad Ki Mao",
            "price": 65,
            "icon":"../images/group-7-copy.png"
        }

    
    ]


    return (
        <SignatureDishContainer>
        {list.map(card => {
             return (
                 <Card key={card.id} title={card.title} body={card.body} img={card.image} alt={card.alt} restaraunt={card.restaraunt} price={card.price} icon={card.icon} isSignatureDish={card.type}/>
             )
         })}
         </SignatureDishContainer>
    )
}

export default SignatureDish
