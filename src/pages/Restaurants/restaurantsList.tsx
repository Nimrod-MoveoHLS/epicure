import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Cards/Card";
import firebase from "firebase";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = firebase.firestore();
    let restaurantsRef = db.collection("restaurants");
    let allRestaurants = await restaurantsRef.get();
    let dataArray: any = [];
    for (const doc of allRestaurants.docs) {
      dataArray.push({ ...doc.data(), id: doc.id });
    }
    setRestaurants(dataArray);
    console.log(restaurants);
  };

  const filterHandler = (e: any) => {
    if (e.target.value === "all") {
      // fetchData()
      setRestaurants(restaurants.filter((card) => card));
    }
    if (e.target.value === "new") {
      setRestaurants(restaurants.filter((card) => card.new));
    }
    if (e.target.value === "open") {
      setRestaurants(restaurants.filter((card) => card.open));
    }
    if (e.target.value === "popular") {
      setRestaurants(restaurants.filter((card) => card.popular));
    }
  };

  return (
    <RestarauntContainer>
      <FilterContainer>
        <button value="all" onClick={(e) => filterHandler(e)}>
          All
        </button>
        <button value="new" onClick={(e) => filterHandler(e)}>
          New
        </button>
        <button value="popular" onClick={(e) => filterHandler(e)}>
          Most Popular
        </button>
        <button value="open" onClick={(e) => filterHandler(e)}>
          Open Now
        </button>
      </FilterContainer>
      <Cardscontainer>
        {restaurants.map((card: any) => {
          return (
            <Link key={card.id} to={`/restaurants/${card.id}`}>
              <Card
                title={card.title}
                body={card.body}
                img={card.image}
                alt={card.alt}
                cardData={card}
                isRest={card.type}
              />
            </Link>
          );
        })}
      </Cardscontainer>
    </RestarauntContainer>
  );
};

export default RestaurantsList;

const RestarauntContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
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

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }
`;

const Cardscontainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* padding: 1em; */
  grid-row-gap: 30px;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1px;
  }
`;
const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
  margin-top: 5vh;
  button {
    height: 21px;
    margin: 1px 36.3px 0;
    font-family: HelveticaNeue;
    font-size: 1.3rem;
    font-weight: 100;
    letter-spacing: 1.92px;
    color: gray;
    border: none;
    background-color: white;
    cursor: pointer;
    outline: none;
  }
  button:active {
    color: black;
  }
  button:focus {
    color: black;
  }

  @media only screen and (max-width: 550px) {
    justify-content: space-evenly;
    /* width: 80%; */
    button {
      height: 21px;
      margin: 0;
      font-family: HelveticaNeue;
      font-size: 1rem;
    }
  }
`;
