
import * as React from "react";

import Card from "../../components/Cards/Card";


const restaurantsList = () => {

    const list = [
        {
            "id":1,
            "title": "Claro",
            "image": "../images/claro.png",
            "body": "lalala",
            "alt" : "claro-img"
        },
        {
            "id":2,
            "title": "Bla blaaaaaaa",
            "image": "../images/claro.png",
            "body": "laladfdfdfdfdfla",
            "price":232323
        }
    
    ]


    return (
        <div>
            {list.map(card => {
                return (
                    <Card key={card.id} title={card.title} price={card.price} body={card.body} img={card.image} alt={card.alt}/>
                )
            })}
        </div>
    )
}

export default restaurantsList
