import * as React from "react";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "./firebase";
// import styled from "styled-components";
import { GlobalStyle } from "./global";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Restaurants from "./pages/Restaurants/restaurantsList";
import Dishes from "./pages/Dishes/DishList";
// import dishPreview from "./pages/Restaurants/dishPreview";
import Footer from "./components/Footer/footer";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      let restaurantsRef = db.collection('restaurants');
      let allRestaurants = await restaurantsRef.get()
      let dataArray:any = []
      for (const doc of allRestaurants.docs){
        dataArray.push({...doc.data(), id: doc.id})
      }
      setRestaurants(dataArray)
    };
    
    fetchData();
  },[]);

  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurants} restaurants={restaurants} />
        <Route path="/restaurants/:id" component={Dishes}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
