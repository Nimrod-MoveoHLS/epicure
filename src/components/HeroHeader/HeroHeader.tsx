import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BackgroundImg from "../../background-image/hero-picture.png";
import { Subject } from "rxjs";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "rxjs/operators";
// import { fetchData } from "./api";

const HeroHeader = () => {
  const [searchKey, setSearchKey] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const subjectRef:any = useRef();


  function onChangeSearchKey(e:any) {
    const searchKey = e.target.value;
    setSearchKey(searchKey);
    subjectRef.current.next(searchKey);
  }

  async function fetchData(keyword = "") {
    const response = await fetch("./data.json");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data.filter((data_1: any) => data_1.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  

  useEffect(() => {
    subjectRef.current = new Subject();
    const subscription = subjectRef.current
      .pipe(
        filter(function(text:any) {
          return text.length >= 2; 
        }),
        debounceTime(550),
        distinctUntilChanged(),
        switchMap((keyword:any) => {
          setIsLoading(true);
          return fetchData(keyword);
        })
      )
      .subscribe((data:any) => {
        setRestaurants(data);
        setIsLoading(false);
      });
      return () => {
        subscription.unsubscribe();
      };
    }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <h3>Epicure works with the top chef restaurants in Tel Aviv</h3>
        <SearchContainer>
          <img src="../images/search-icon.png" alt="search-icon"></img>
          <input
            type="text"
            placeholder="Search for retaraunt cuisine, chef"
            value={searchKey} onChange={onChangeSearchKey}
          ></input>
        </SearchContainer>
        <div>
        {isLoading ? "Loading" : null}
      <ul>
        {restaurants.map((city:any) => {
          return <li key={city.id}>{city.title}</li>;
        })}
      </ul>
        </div>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroHeader;



const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  margin-bottom: 7vh;


  @media only screen and (max-width: 650px) {
    height: 269px;
  }
`;

const HeroContent = styled.div`
  width: 781px;
  height: 222px;
  padding: 18px 33px 22px;
  background-color: rgba(255, 255, 255, 0.88);
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
  margin-top: 35vh;

  h3 {
    height: 73px;
    margin: 0 36px 18px 38px;
    font-family: HelveticaNeue;
    font-size: 35px;
    font-weight: 100;
    line-height: 1;
    letter-spacing: 1.97px;
    text-align: center;
    color: black;
  }

  @media only screen and (max-width: 650px) {
    width: 90%;
    height: 125px;
    padding: 18px 33px 22px;
    margin-top: 8vh;
    h3 {
    font-size: 20px;
    margin: 0;
    height: 39px;
    margin-bottom: 3vh;
  }
  }


`;
const SearchContainer = styled.div`
  margin-top: 1vw;
  font-family: HelveticaNeue;
  font-size: 1.2rem;
  letter-spacing: 1.57px;
  border-radius: 4px;
  border: solid 0.6px black;
  display: flex;
  justify-content: center;
  align-items: center;


  img {
    width: 31px;
    height: 31px;
    margin: 0 20px 0 0;
    object-fit: contain;
  }
  input {
      opacity: 0.53;
    width: 511px;
    height: 48px;
    border: none;
    background-color: transparent;
    object-fit: contain;
    border-radius: 4px;
    font-family: HelveticaNeue;
    font-size: 22px;
    font-weight: 100;
    letter-spacing: 1.57px;
    text-align: center;
    color: black;
    :focus {
    outline: none;
  }
  }

  @media only screen and (max-width: 650px) {
    width: 300px;
    height: 33px;
    margin: 0 auto;
  padding: 8px 19px 8px 9px;
    border-radius: 4px;
    border: solid 0.2px black;
    background-color: rgba(255, 255, 255, 0.11);

    input {
    width: 90%;
    height: 30px;
    opacity: 0.64;
    font-family: HelveticaNeue;
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 0.93px;
    text-align: center;
    color: black;
  }

  img {
    width: 16px;
    height: 16px;
    margin: 1px 8px 0 0;
    object-fit: contain;
  }
  }


`;