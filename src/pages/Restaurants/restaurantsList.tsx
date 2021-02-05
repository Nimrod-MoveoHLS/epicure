import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/Cards/Card";
import firebase from "firebase";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [filteredRest, setfilteredRest] = useState<any[]>([]);

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
    setfilteredRest(dataArray)
  };

  const filterHandler = (e: any) => {
    if (e.target.value === "all") {
      setfilteredRest(restaurants.filter((card) => card));
    }
    if (e.target.value === "new") {
      setfilteredRest(restaurants.filter((card) => card.new));
    }
    if (e.target.value === "open") {
      setfilteredRest(restaurants.filter((card) => card.open));
    }
    if (e.target.value === "popular") {
      setfilteredRest(restaurants.filter((card) => card.popular));
    }
  };

  return (
    <RestarauntContainer>
      <p className="mobile-header">RESTAURANTS</p>
      <FilterContainer>
        <button className="btn-all" value="all" onClick={(e) => filterHandler(e)}>
          All
        </button>
        <button value="new" className="btn-new" onClick={(e) => filterHandler(e)}>
          New
        </button>
        <button value="popular" className="btn-popular" onClick={(e) => filterHandler(e)}>
          Most Popular
        </button>
        <button value="open" className="btn-open" onClick={(e) => filterHandler(e)}>
          Open Now
        </button>
      </FilterContainer>
      <Cardscontainer>
        {filteredRest.map((card: any) => {
          return (
            <Link key={card.id} to={`/restaurants/${card.id}`}>
              <Card
              key={card.id}
              id={card.id}
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
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  .mobile-header{
    display: none;
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

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    .mobile-header{
    display: block;
    margin-top:20px;
    font-family: HelveticaNeue;
  font-size: 1.25rem;
  letter-spacing: 1.54px;
  font-weight: 500;
  }
  }
`;


const Cardscontainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 38px;
  margin-left:12.07%;
  margin-right:12.07%;
  .card-container {
    margin:0;
    width: 342px;
    height: 339px;
  object-fit: contain;

  .rest-image{
    width: 342px;
  height: 212.2px;
  }
  img{
    width: 342px;
  height: 212.2px;
  }
  }
  .card-content {
  background-color: #f9f4ea;
  height: 126.8px;
  width: 342px;

  justify-content: start;

h2{
  margin-top:26.6px;
margin-bottom: 4.2px;
font-size:2.375rem;
}
p{
  font-size:1.488rem;
}

}
.card-price {
  hr :after {
    background-color: black;
  }
} 
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 13px;

    .card-container{
      width: 162px;
  height: 190.5px;
  .rest-image{
      width: 162px;
  height: 122px;
  }
  img{
    width: 162px;
  height: 122px;
  }
  .card-content{
    height: 68.5px;
    width: 162px;
h2{
  font-size:1.075rem;
  margin-top:13.5px;
margin-bottom: 7px;
letter-spacing: 1.15px;
}
p{
  font-size:0.831rem;
  letter-spacing: 0.89px;

}
  }
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  margin-top: 53px;
  button {
    height: 21px;
    font-family: HelveticaNeue;
    padding:0;
    font-size: 1.125rem;
    font-weight: 100;
    letter-spacing: 1.92px;
    color: gray;
    border: none;
    background-color: white;
    cursor: pointer;
    outline: none;

 
  }
  .btn-all {
      margin-right:47px;
    }

    .btn-new {
      margin-right:41px;
    } 
    .btn-popular{
      margin-right:17px;
    }
  button:active {
    color: black;
  }
  button:focus {
    color: black;
  }

  @media only screen and (max-width: 750px) {
    margin-left:5.33%;
    margin-right:4.8%;
    margin-bottom: 21px;
    margin-top: 22px;



  
    button {
      height: 21px;
      margin: 0;
      font-family: HelveticaNeue;
      font-size: 1rem;
      letter-spacing: 1.71px;

    }
    .btn-all {
      margin-right:27.3px;
    }

    .btn-new {
      margin-right:27.3px;
    } 
    .btn-popular{
      /* margin-right:27.3px; */
    }
  }
`;
