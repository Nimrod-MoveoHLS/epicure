import * as React from "react";
import "./home.css";
import HeroHeader from "../../components/HeroHeader/HeroHeader"
import PopularRestaurants from "../../components/Cards/restaurantCard"
import SignatureDish from "../../components/Cards/dishCard"
import IconMeaning from "../../components/IconsMeaning/iconMeaning";
import About from "../../components/About/About"
import WeeklyChef from "../../components/WeeklyChef/WeeklyChef"

const Home = () => {
    return (
        <div className="home-container">
            <HeroHeader />
            <div className="popluar-title">
                <h1>THE POPULAR RESTAURANTS IN EPICURE</h1>
            </div>
            <div className="popular-rest">
            <PopularRestaurants />
            <PopularRestaurants />
            <PopularRestaurants />
            </div>
            <a href="/" className="menu-link">All Restaurants</a>
            <div className="signature-title">
                <h1>THE POPULAR RESTAURANTS IN EPICURE</h1>
            </div>
            <div className="signature-dish">
                <SignatureDish />
                <SignatureDish />
                <SignatureDish />
            </div>
            <About />
            <div className="icon-meaning">
            <IconMeaning />
            </div>
            <WeeklyChef />
        </div>
    )
}

export default Home

