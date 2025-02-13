import React from "react";
import "../styles/Indicators.css";
import "../styles/Formulas.css";
import Indicator from "./Indicator";
//icons
import userIcon from "../images/icons/user.png";
import trophyIcon from "../images/icons/trophy.png";
import timeTableIcon from "../images/icons/timetable.png";
import clockIcon from "../images/icons/time.png";


const Indicators = () => {

    //Data to fill in the indicators cards
    const data = [
        {
            icon: userIcon,
            number: 12000,
            title: "Випускників"
        },
        {
            icon: trophyIcon,
            number: 10,
            title: "Років ефективного навчання та адаптації співробітників"
        },
        {
            icon: timeTableIcon,
            number: 5,
            title: "Днів на тиждень"
        },
        {
            icon: clockIcon,
            number: 40,
            title: "Годин на тиждень"
        }
    ]

    return (<div className="indicators-container">
        {data.map((data, index) => (
            <Indicator
                key={index}
                icon={data.icon}
                number={data.number}
                title={data.title}
            />
        ))}
    </div>)
}

export default Indicators;