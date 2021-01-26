import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import {GlobalStyle} from "./global";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import Restaurants from "./pages/Restaurants/restaurantsList"
import dishPreview from "./pages/Restaurants/dishPreview"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <Router>
          <GlobalStyle/>
    <div className="App">
      <NavBar />
   <Route path="/" exact component = {Home} />
   <Route path="/restaurants" component = {Restaurants} />
   <Route path="/restaurants/:id" component = {Restaurants} />
   <Footer /> 

    </div>
    </Router>

  );
}

export default App;
