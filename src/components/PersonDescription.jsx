import React from "react";
import "../styles/PersonDescription.css";
import "../styles/Formulas.css";

const PersonDescription = ({ personName, jobTitle, title, description, customWidth }) => {
    return (
        <div className="person-description-container" style={{ width: customWidth || "400px" }}>
            <h2>{personName}</h2>
            <p>{jobTitle}</p>
            <div className="experience-description-container">
                <h2>{title}</h2>
                <ul>
                    {description.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonDescription;
