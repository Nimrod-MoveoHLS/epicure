import * as React from "react";
import "./dishCard.css";

const dishCard = () => {
    return (
        <div className="dish-card-container">
            <div className="dish-card-header">
                <h1>Tiger Lilly</h1>
            </div>
            <div className="dish-image-container">
                <img src="../images/rectangle.png" className="dish-img" alt="dish-img"></img>
            </div>
            <div className="dish-card-content">
                <div className="card-title">
                    <h2>Pad Ki Mao</h2>
                </div>
                <div className="dish-card-body">
                    <p>Shrimps, Glass Noodles,Shrimps, Glass Noodles,Shrimps, Glass Noodles,Shrimps, Glass Noodles,</p>
                </div>
                <div className="dish-dish-price">
                    <p>$100</p>
                </div>
            </div>

        </div>
    )
}

export default dishCard
