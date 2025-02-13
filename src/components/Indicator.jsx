import React from "react";
import "../styles/Indicator.css";
import "../styles/Formulas.css";

const Indicator = ({ icon, number, title }) => {
    return(
        <div className="indicator-container">
            <img src = {icon} alt = "icon" />
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
    )
}

export default Indicator;