import * as React from "react";
import "./restaurantCard.css";

const restaurantCard = () => {
    return (
        <div className="rest-card-container">
            <div className="rest-image-container">
            <img src="../images/claro.png" className="claro-img" alt="claro-img"></img>
            </div>
            <div className="rest-card-content">
            <div className="rest-card-title">
                <h2>Claro</h2>
            </div>
            <div className="rest-card-body">
                <p>Ran Shmueli</p>
            </div>
            </div>
           
        </div>
    )
}

export default restaurantCard
