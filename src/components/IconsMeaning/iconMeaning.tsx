import * as React from "react";
import "./iconMeaning.css";

const iconMeaning = () => {
    return (
        <div className="icon-meaning-container">
             <div className="meaning-header">
                <h1>THE MEANING OF OUR ICONS:</h1>
            </div>
            <div className="icons-group">


                <div className="spicy-icon">
                <img src="../images/spicy-icon.png" className="spicy-icon" alt="spicy-icon"></img>
                <p>Spicy</p>
                </div>
                <div className="vegetarian-icon">
                <img src="../images/vegetarian.png" className="vegetarian-icon" alt="vegetarian-icon"></img>
                <p>Vegetarian</p>
                </div>
                <div className="vegan-icon">
                <img src="../images/vegan-icon.png" className="vegan-icon" alt="vegan-icon"></img>
                <p>Vegan</p>
                </div>
            </div>
         
        </div>
    )
}

export default iconMeaning
