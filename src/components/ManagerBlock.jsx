import React from "react";
import "../styles/ManagerBlock.css";
import "../styles/Formulas.css";
import PersonDescription from "./PersonDescription";
import photo from "../images/img4.jpg";
import Quote from "./Quote";

const ManagerBlock = () => {

    const managerInfo = [
        {
            personName: "Олександр Севрюков",
            jobTitle: "Доцент, Кандидат фармацевтичних наук",
            title: "Досвід",
            description: ["10 років наукої та науково-педагогічної  роботи.", "Автор та співавтор більше 20 наукових та науково – методичних публікацій.", "Досвід управління фармацевтичними закладами та впровадження автоматизованих бізнес-процесів у аптечній мережі.", "Експерт у навчанні та стажуванні фармацевтичного персоналу з акцентом на практичні навички та професійне зростання."]
        }
    ]

    return (
        <div className="manager-block-container">
            <h1>Керівник Навчального Центру 9&#183;1&#183;1</h1>
            <div className="main-part-container">
                <img src={photo} alt="manager`sPhoto" />
                <PersonDescription
                    personName={managerInfo[0].personName}
                    jobTitle={managerInfo[0].jobTitle}
                    title={managerInfo[0].title}
                    description={managerInfo[0].description}
                />
            </div>
            <div className="quote-part-container">
                <Quote />
            </div>
        </div>
    )
}

export default ManagerBlock;