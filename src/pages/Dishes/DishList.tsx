import React from 'react'
import { useState, useEffect } from "react";
import {   RouteComponentProps } from "react-router-dom";

import Card from "../../components/Cards/Card";
import styled from "styled-components";
import firebase from "firebase";


function DishList({ match }: RouteComponentProps<any>) {
    const [dishes, setDishes] = useState<any[]>([])

    useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        let restaurantsRef = db.collection('restaurants').doc(`${match.params.id}`).collection('dishes');;
        let allRestaurants = await restaurantsRef.get()
        let dataArray: any = []
        for (const doc of allRestaurants.docs) {
          dataArray.push({ ...doc.data(), id: doc.id })
        }
        setDishes(dataArray)

      };
      fetchData();
    }, []);

    console.log(dishes)

    return (
        <DishContainer>

        <SignatureDishContainer>
        {dishes.map(card => {
             return (
                 <Card key={card.id} title={card.title} body={card.body} img={card.image} alt={card.alt}  price={card.price} icon={card.icon} isRest={card.type}/>
             )
         })}
         </SignatureDishContainer>
        </DishContainer>
    )
}

export default DishList



const DishContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  padding-right: 0;
align-items:center  }
`;

const SignatureDishContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* padding: 1em; */
    grid-row-gap: 30px;
  
    @media only screen and (max-width: 550px) {

        grid-template-columns: 1fr 1fr;
    grid-row-gap: 1px;
    }
`