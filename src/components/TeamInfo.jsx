import React from "react";
import Popup from "reactjs-popup";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import TeamMember from "./TeamMember";
import "../styles/TeamInfo.css";
import "reactjs-popup/dist/index.css";

const Teaminfo = () => {
    const teamData = [
        {
            image: photo1,
            personName: "Звольський Андрій",
            description: "Керівник відділу навчання, розвитку та оцінки"
        },
        {
            image: photo2,
            personName: "Павленко Катерина",
            description: "Старший регіональний менеджер з навчання, сертифікований коуч"
        },
        {
            image: photo3,
            personName: "Кравченко Світлана",
            description: "Завідувач аптеки. Викладач Навчального Центру з адаптації нових співробітників"
        },
        {
            image: photo4,
            personName: "Кравчук Надія",
            description: "Менеджер з навчання персоналу, бізнес-тренер, методолог"
        }
    ];

    return (
        <div className="team-info-container">
            <h1>Познайомтесь з нашою командою</h1>
            <div className="all-team-container">
                {teamData.map((data, index) => (
                    <Popup
                        key={index}
                        trigger={
                            <div>
                                <TeamMember
                                    image={data.image}
                                    personName={data.personName}
                                    description={data.description}
                                />
                            </div>
                        }
                        modal
                        nested
                    >
                        {close => (
                            <div className="popup-modal">
                                <button className="close-btn" onClick={close}>
                                    &times;
                                </button>
                                <img src={data.image} alt={data.personName} />
                                <h2>{data.personName}</h2>
                                <p>{data.description}</p>
                            </div>
                        )}
                    </Popup>
                ))}
            </div>
        </div>
    );
};

export default Teaminfo;
