import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import  Modal  from '../../components/Modal/Modal';


import Card from "../../components/Cards/Card";
import styled from "styled-components";
import firebase from "firebase";

function DishList({ match }: RouteComponentProps<any>) {
  const [dishes, setDishes] = useState<any[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<any[]>([]);
  const [header, setHeader] = useState<any>({});
  const [selectedDishId, setselectedDishId] = useState(null);
  const [showModal, setShowModal] = useState<any>(false);

  const openModal = () => {
    setShowModal((prev:any) => !prev);
  };

  useEffect(() => {
    fetchHeader();
    fetchData();
  }, []);

  const fetchData = async () => {
    const db = firebase.firestore();
    let restaurantsRef = db
      .collection("restaurants")
      .doc(`${match.params.id}`)
      .collection("dishes");
    let allRestaurants = await restaurantsRef.get();
    let dataArray: any = [];
    for (const doc of allRestaurants.docs) {
      dataArray.push({ ...doc.data(), id: doc.id });
    }
    setDishes(dataArray);
    setFilteredDishes(dataArray)
  };

  const fetchHeader = async () => {
    const db = firebase.firestore();
    var docRef = db.collection("restaurants").doc(`${match.params.id}`);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setHeader(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  const filterHandler = (e: any) => {
    if (e.target.value === "breakfest") {
      setFilteredDishes(dishes.filter((card) => card.breakfest));
    }
    if (e.target.value === "launch") {
      setFilteredDishes(dishes.filter((card) => card.launch));
    }
    if (e.target.value === "dinner") {
      setFilteredDishes(dishes.filter((card) => card.dinner));
    }
  };

  ;
  

  return (
    <Container>
    <DishContainer>
        <HeaderImage mobileImage={header.phoneImage}>
          <img src={header.imageHeader} alt={header.alt}></img>
        </HeaderImage>
      <HeaderContainer>
          <HeaderContent>
            <h1>{header.title}</h1>
            <p>{header.body}</p>
          </HeaderContent>
      </HeaderContainer>
      <IsOpen isOpen={header.open}> 
            <img src={header.clockImage} alt={header.alt}></img>
            <h2>
              <span>Open</span> now
            </h2>
          </IsOpen>
      <FilterContainer>
        <button value="breakfest" onClick={(e) => filterHandler(e)} >Breakfest</button>
        <button value="launch" onClick={(e) => filterHandler(e)}>Lunch</button>
        <button value="dinner" onClick={(e) => filterHandler(e)}>Dinner</button>
      </FilterContainer>
      <SignatureDishContainer>
        {filteredDishes.map((card) => {
          return (
            <Card
            onClickId={setselectedDishId}
            onClickModal={openModal}
              key={card.id}
              id={card.id}
              title={card.title}
              body={card.body}
              img={card.image}
              alt={card.alt}
              price={card.price}
              icon={card.icon}
              isDish={card.type}
            />
          );
        })}
      </SignatureDishContainer>

    </DishContainer>
      <Modal showModal={showModal} setShowModal={setShowModal} selectedDishId={selectedDishId != null} setselectedDishId={setselectedDishId} dish={dishes.find(dish => dish.id === selectedDishId)} />
     </Container> 
    
  );
}

export default DishList;

const Container = styled.div`
  display: flex;
  align-items: center;
width: 100%;
margin-bottom:172px;
@media only screen and (max-width: 650px) {
  margin-bottom:53px;

}
`;


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
`;
const HeaderImage = styled.div<{ readonly mobileImage?: string }>`
  img {
    width: 100%;
    height: 395px;
    object-fit: contain;
  }
  @media only screen and (max-width: 650px) {
    img {
      content: url("${(p) => p.mobileImage}");
      width: 100vw;
      height: 100%;
      object-fit: contain;
    }
  }
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
  font-family: HelveticaNeue;

  h1 {
    margin-top: 27.2px;
    margin-bottom: 2px;
    font-size: 3.438rem;
    letter-spacing: 3.67px;
  }

  p {
    font-size: 1.875rem;
    font-weight: 100;
    letter-spacing: 2px;
  }
  @media only screen and (max-width: 650px) {
    h1{
      margin-top: 17px;
      margin-bottom: 1px;
      font-size:2.188rem;
      letter-spacing: 2.33px;

    }
    p{
      font-size:1.5rem;
    }
  }
`;
const IsOpen = styled.div<{ readonly isOpen?: boolean }>`
  margin-top: 27.2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  h2 {
    margin: 0 0 0 9px;
    font-family: HelveticaNeue;
    font-size: 1rem;
    font-weight: 100;
    line-height: 0.94;
    letter-spacing: 1.2px;
    text-align: center;
  }

  span {
    content: ${p => p.isOpen ? 'Open' : 'Closed'};
  }

  img {
    width: 17px;
    height: 17px;
    object-fit: contain;
  }

  @media only screen and (max-width: 650px) {
    margin-top: 14px;
    h2 {
      font-size:0.75rem;
  letter-spacing: 0.8px;
    }

  }
`;
const DishContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
    height: 100%;
    


  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }
`;

const SignatureDishContainer = styled.div`
  display: grid;
  margin-left:12.07%;
  margin-right:12.07%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 53px;
  
  .card-container {
    width: 236px;
    height: 413px;
    img {
  width: 235.5px;
  height: 150px;
  object-fit: contain
} 

  }
.card-content {
  background-color: #f9f4ea;
  text-align: center;
  font-family: HelveticaNeue;
  display: flex;
  justify-content: start;
      flex-direction: column;
  width: 235.5px;
  height: 261px;

    img {
  width: 235.5px;
  height: 150px;
  object-fit: contain
} 
.card-price {
  margin-top: 21px;
  hr:after{
      background-color: #f9f4ea;
      font-size: 1.313rem;

         } 
} 
h2 {
    font-family: HelveticaNeue;
  font-weight: 100;
    margin-top:18px;
    font-size: 2rem;
    letter-spacing: 2.67px;
  }

  p {
    font-size: 1.563;
    font-weight: 100;
    letter-spacing: 1.67px;
    margin-top:16px;
    width: 71%;
    font-size: 1.219rem;
    font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  }

.icon {
  img {
    width: 30px;
  height: 30px;
  object-fit: contain;
  }
  
}

}
  
@media only screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    
    .card-container{
      width: 157px;
      height: 274px;

img{
  width: 157px;
  height: 100px;
  object-fit: contain;
}
    }
    .card-content {
      width: 157px;
    height: 174px;
    
    .icon {
  img {
    width: 23px;
  height: 17px;
  object-fit: contain;
  }
    }

    h2{
      font-size:0.938rem;
      margin-top:12px;

    }
    p{
      font-size:0.813rem;
      margin-top:10px;

      font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: 0.87px;
  margin-bottom:10px;

    }
    .card-price {
      margin-top:10px;

  hr:after{
      background-color: #f9f4ea;
      font-size:0.875rem
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
  margin-bottom: 42px;
  margin-top: 47.8px;
  button {
    height: 21px;
    margin: 1px 36.3px 0;
    font-family: HelveticaNeue;
    font-size: 1.3rem;
    font-weight: 100;
    letter-spacing: 1.92px;
    color: black;
    border: none;
    background-color: white;
    cursor: pointer;
    outline: none;
  }
  button:active {
  padding-bottom: 25px;
  border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);  }
  button:focus {
    padding-bottom: 25px;
  border-bottom: solid 1.8px rgba(222, 146, 0, 0.9);  }

  @media only screen and (max-width: 650px) {
    justify-content: space-evenly;
    margin-top: 20px;
    margin-top: 20px;

    button{
      font-size:1.063rem;
      margin:0;
      letter-spacing: 1.21px;

    }
}

`;
