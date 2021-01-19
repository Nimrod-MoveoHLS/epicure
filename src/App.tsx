import * as React from "react";
import "./App.css";
import NavBar from "./components/NavBar/ NavBar"
import HeroHeader from "./components/HeroHeader/HeroHeader"
import About from "./components/About/About"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroHeader />
      <About />
      <Footer />
    </div>
  );
}

export default App;
