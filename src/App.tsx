import * as React from "react";
import "./App.css";
import NavBar from "./components/NavBar/ NavBar"
import About from "./components/About/About"
import Footer from "./components/Footer/footer"


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
