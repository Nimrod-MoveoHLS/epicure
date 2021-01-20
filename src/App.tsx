import * as React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
// import HeroHeader from "./components/HeroHeader/HeroHeader"
// import About from "./components/About/About"
import Footer from "./components/Footer/footer"


function App() {
  return (
    // <Router>
    <div className="App">
      <NavBar />
   <Home />
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
