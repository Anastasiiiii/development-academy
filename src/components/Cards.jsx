import React from "react";
import "../styles/Cards.css";
import "../styles/Formulas.css";
import Card from "./Card";
//icons
import pharmacyIcon from "../images/icons/pharmacy.png";
import stairsIcon from "../images/icons/stairs.png";
import targetIcon from "../images/icons/target.png"; 

const Cards = () => {

    //Data to fill in the cards
    const cardData = [
        {
            icon: pharmacyIcon,
            title: "Обладнаний навчальний клас",
            description: "Модель реальної аптеки та справжнє аптечне програмне забезпечення для формування практичних навичок."
        },
        {
            icon: targetIcon,
            title: "Менторська підтримка",
            description: "Модель реальної аптеки та справжнє аптечне програмне забезпечення для формування практичних навичок."
        },
        {
            icon: stairsIcon,
            title: "Професійне зростання у майбутньому",
            description: "Програми “Вища Ліга” та “Кар'єрний ліфт” для професійного зростання фахівців мережі."
        },
    ]

    return(
        <div className="cards-container">
            {cardData.map((data, index) => (
                <Card 
                    key = {index}
                    icon = {data.icon}
                    title = {data.title}
                    description = {data.description}
                />
            ))}
        </div>
    )
}

export default Cards;