import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from "../../background-image/hero-picture.png";
import BackgroundImgMobile from "../../background-image/headerImg.png";
import { Subject } from "rxjs";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";
// import { fetchData } from "./api";

const HeroHeader = () => {
  const [searchKey, setSearchKey] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const subjectRef: any = useRef();


  function onChangeSearchKey(e:any) {
    const searchKey = e.target.value;
    setSearchKey(searchKey);
    subjectRef.current.next(searchKey);
  }

   async function fetchData(keyword = "") {
    const resp = await fetch("/data2.json");
     const data = await resp.json();
     return data.filter((data_1:any )=> data_1.title.toLowerCase().includes(keyword.toLowerCase())
     );
  }
  
  useEffect(() => {
    subjectRef.current = new Subject();
    const subscription = subjectRef.current
      .pipe(
        filter(function(text:any) {
          return text.length >= 1 ; 
        }),
        debounceTime(250),
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
    <HeroContainer BackgroundImgMobile={BackgroundImgMobile}>
      <HeroContent>
        <HeroContentHeader>
          <h3>Epicure works with the top chef restaurants in Tel Aviv</h3>
        </HeroContentHeader>
        <SearchContainer>
          <img src="../images/search-icon.svg" alt="search-icon"></img>
          <input
            type="text"
            placeholder="Search for restaraunt cuisine, chef"
            value={searchKey} onChange={onChangeSearchKey}
          ></input>
        </SearchContainer>
        {searchKey && 
        <SearchResults>
        {isLoading ? "Loading" : null}
      <ul>
        <li className="rest-li">Restaurants</li>
        {restaurants.map((restaurant:any) => {
          return <li>
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}> {restaurant.title}</Link>
           </li>;
        })}
          <li className="dish-li">Cuisine</li>
          {restaurants.map((dish:any) => {
          return <li key={dish.dish_id}>{dish.dish}</li>;
        })}
      </ul>
        </SearchResults>
      }
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroHeader;

const HeroContainer = styled.div<{readonly BackgroundImgMobile:any}>`
  position: relative;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: auto;

  @media only screen and (max-width: 750px) {
    background-image: url("${(p) => p.BackgroundImgMobile}");
    height: 269px;
  }
`;

const HeroContent = styled.div`
  box-sizing: border-box;
  width: 55.7%;
  min-width: 781px;
  height: 222px;
  background-color: rgba(255, 255, 255, 0.88);
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 2rem;

  @media only screen and (max-width: 750px) {
    box-sizing: border-box;
    width: 89.33%;
    height: 125px;
    min-width: 335px;;
  }
`;
const HeroContentHeader = styled.div`
  h3 {
    margin-top: 41px;
    margin-left: 22.28%;
    margin-right: 21.77%;
    font-family: "HelveticaNeue";
    font-size: 2.188rem;
    font-weight: 100;
    line-height: 1;
    text-align: center;
    color: black;
  }
  @media only screen and (max-width: 750px) {
    h3 {
      font-size: 1rem;
      font-weight: 100;
      letter-spacing: 1px;
      width: 70%;
    margin: 0 auto;
    line-height: 1.3;
    margin-top: 18px;
    }
  }
`;
const SearchContainer = styled.div`
  width: 65.43%;
  margin-top: 18px;
  height: 21.62%;
  margin-left: 17.41%;
  font-family: HelveticaNeue;
  font-size: 1rem;
  letter-spacing: 1.57px;
  border-radius: 4px;
  border: solid 0.6px black;
  display: flex;
  align-items: center;
  opacity: 0.64;

  img {
    width: 31px;
    height: 31px;
    object-fit: contain;
    margin-left: 20px;
    opacity: initial;

  }
  input {
    width: 100%;
    border: none;
    background-color: transparent;
    object-fit: contain;
    border-radius: 4px;
    font-family: HelveticaNeue;
    font-size: 1.375rem;
    font-weight: 100;
    letter-spacing: 1.57px;
    color: black;
    margin-left: 20px;
    :focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 750px) {
    width: 80.3%;
    align-items: center;
    height: 33px;
    border-radius: 4px;
    border: solid 0.2px gray;
    background-color: rgba(255, 255, 255, 0.11);
    margin: 0 auto;
    margin-top:13px;


    input {
      width: 90%;
      height: 30px;
      font-family: HelveticaNeue;
      font-size: 0.9rem;
      font-weight: 100;
      letter-spacing: normal;
      color: black;
      margin-left:8px
    }

    img {
      width: 16px;
      height: 16px;
      object-fit: contain;
      margin-left: 9px;
      opacity: initial;
    }
  }
`;


const SearchResults = styled.div`
color: black;
text-align: left;
position: absolute;
width: 64.02%;
z-index: 1000;

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
  ul {
  list-style-type: none;
  margin-top: 11px;

  .rest-li{
    /* margin-top:20px; */
  opacity: 0.5;
  }
  .dish-li{
    margin-top:20px;
  opacity: 0.5;
  }
}
li {
  margin-left:57px;
  margin-bottom:10px;
  font-size: 15px;

}
  margin-left:18%
;
  height: 134px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: white;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.07px;
  @media only screen and (max-width: 750px) {
    height: 80px;
    margin-left: 17.41%;
    width: 65%;
    


    ul {
  list-style-type: none;
  
  .rest-li{
  opacity: 0.5;
  
  }
  .dish-li{
    margin-top:10px;
  opacity: 0.5;
  
  }
    }
    li{
      margin: 5px;
      margin-left:20px;

    }
  }
`