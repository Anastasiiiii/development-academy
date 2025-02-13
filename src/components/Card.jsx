import React from "react";
import "../styles/Card.css";
import "../styles/Formulas.css";

const Card = ({ icon, title, description }) => {
    return (
        <div className="card-container">
            <img src = {icon} alt = "icon" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Card;