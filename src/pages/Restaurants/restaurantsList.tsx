import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Cards/Card";

const RestaurantsList = () => {

  const restarauntList = [
    {
      id: 1,
      new: true,
      popular: true,
      open: true,
      type: "restaraunt",
      title: "Claro",
      image: "../images/claro.png",
      body: "Ran Shmueli",
      alt: "claro-img",
      dishes: [
        {
          id: 1,
          title: "Pad Ki Mao",
          image: "../images/padkimao.png",
          body:
            "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
          alt: "Pad Ki Mao",
          price: 88,
          icon: "../images/group-2.svg",
        },
      ],
    },
    {
      id: 2,
      new: true,
      popular: false,
      open: true,
      type: "restaraunt",
      title: "Kab Kem",
      image: "../images/kab-kem.png",
      body: "Yariv Malili",
      alt: "Kab Kem",
    },
    {
      id: 3,
      new: false,
      popular: false,
      open: false,
      type: "restaraunt",
      title: "Messa",
      image: "../images/messa.png",
      body: "Aviv Moshe",
      alt: "Messa",
    },
    {
      id: 4,
      new: true,
      popular: false,
      open: false,
      type: "restaraunt",
      title: "Nithan Thai",
      image: "../images/nithan-thai.png",
      body: "Shahaf Shabtay",
      alt: "Nithan Thai",
    },
    {
      id: 5,
      new: false,
      popular: false,
      open: true,
      type: "restaraunt",
      title: "Tiger Lilly",
      image: "../images/tiger-lilly.png",
      body: "Yanir Green",
      alt: "Tiger Lilly",
    },
    {
      id: 6,
      new: true,
      popular: true,
      open: true,
      type: "restaraunt",
      title: "Ya Pan",
      image: "../images/japanese.png",
      body: "Yuval Ben Neriah",
      alt: "Ya Pan",
    },
    {
      id: 7,
      new: true,
      popular: false,
      open: false,
      type: "restaraunt",
      title: "Lumina",
      image: "../images/lumina.png",
      body: "Meir Adoni",
      alt: "Lumina",
    },
  ];



  const [restList, setRestList] = useState(restarauntList);
//   const [status, setStatus] = useState('all');
  

//   const filterHandler = (value) => {
//       switch (status) {

//           case "all":
//             setFilteredRestaraunts(restarauntList.filter(card => card) )   
//                   break;
    
//           case "new":
//             setFilteredRestaraunts(restarauntList.filter(card => card.new))  
//           break;    

//           case "popular":
//             setFilteredRestaraunts(restarauntList.filter(card => card.popular))    
//           break;
          
//           case "open":
//             setFilteredRestaraunts(restarauntList.filter(card => card.open))   
//           break;      
//   }
const filterHandler = (e:any) => {
    if (e.target.value === 'all') {
       let filtered =  setRestList(restarauntList.filter(card => card) )   
    }
    if(e.target.value === 'new') {
        console.log(e.target.value)
        let filtered =  restarauntList.filter(card => card.new) 
        setRestList(filtered)
    }
    if(e.target.value === 'open') {
        setRestList(restarauntList.filter(card => card.open))  
    }
    if(e.target.value === 'popular') {
        setRestList(restarauntList.filter(card => card.popular))    
    }
}

// const filterHandler = (e:any) => {
//     console.log(e.target.value)
// }
// useEffect(() => {
// filterHandler(e)
// }, [restarauntList])

// const allCatagories = ['All', ...new Set(restarauntList.map(card => card))];

  return (
    <RestarauntContainer>
      <FilterContainer>
        <button value="all" onClick={(e) => filterHandler(e)}>All</button>
        <button value="new" onClick={e => filterHandler(e)}>New</button>
        <button value="popular" onClick={e => filterHandler(e)}>Most Popular</button>
        <button value="open" onClick={e => filterHandler(e)}>Open Now</button> 
      </FilterContainer>
      <Cardscontainer>
        {restList.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              body={card.body}
              img={card.image}
              alt={card.alt}
              cardData={card}
              isRest={card.type}
            />
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

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

const Cardscontainer = styled.section`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1em;
    grid-row-gap: 30px;
  
    @media only screen and (max-width: 550px) {

        grid-template-columns: 1fr;
    grid-row-gap: 20px;
}

`;
const FilterContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom:3vh;
  margin-top:5vh;
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
  outline:none;

  }
  button:active {
    color: black;
  }
  button:focus {
    color: black;
  }

  @media only screen and (max-width:550px) {
justify-content: space-evenly;
  }

`;

