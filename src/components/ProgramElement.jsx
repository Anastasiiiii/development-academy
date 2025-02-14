import React from "react";
import "../styles/ProgramElement.css";
import "../styles/Formulas.css";

const ProgramElement = ({ number, text }) => {
    return (
        <div className="program-element-container">
            <p className="program-day-p">День {number}</p>
            <p className="program-text-p">{text}</p>
        </div>
    )
}

export default ProgramElement;