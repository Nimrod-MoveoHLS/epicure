import * as React from "react";
import "./weeklyChef.css";


const WeeklyChef = () => {
    return (
        <div className="weekly-chef-container">
            <div className="weekly-header">
                <h1>CHEF OF THE WEEK:</h1>
            </div>
            <div className="weekly-content"></div>
            <img src="../images/group-15.png" className="yossi-shitrit-img" alt="yossi-shitrit-img"></img>
            <p>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and
every dish.</p>
        </div>
    )
}

export default WeeklyChef
