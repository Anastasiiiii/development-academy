import React, { useState } from "react";
import "../styles/TeamMember.css";
import "../styles/Formulas.css";
import arrowIcon from "../images/icons/right-arrow.png";
import whiteArrowIcon from "../images/icons/right-arrow-white.png";

const TeamMember = ({ image, personName, description }) => {
    const [arrow, setArrow] = useState(arrowIcon);

    return (
        <div className="team-member-container">
            <span className="main-photo">
                <img src={image} alt="teamPhoto" />
            </span>
            <div 
                className="team-member-info-container"
                onMouseEnter={() => setArrow(whiteArrowIcon)}
                onMouseLeave={() => setArrow(arrowIcon)}
            >
                <h4>{personName}</h4>
                <p>{description}</p>
                <span className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                </span>
            </div>
        </div>
    );
};

export default TeamMember;
