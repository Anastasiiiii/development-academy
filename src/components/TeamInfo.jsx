import React from "react";
import Popup from "reactjs-popup";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import TeamMember from "./TeamMember";
import "../styles/TeamInfo.css";
import "reactjs-popup/dist/index.css";
import PersonDescription from "./PersonDescription";

const Teaminfo = () => {
    const teamData = [
        {
            image: photo1,
            personName: "Звольський Андрій",
            description: "Керівник відділу навчання, розвитку та оцінки",
            experiene: ["Керівник відділу навчання, розвитку та оцінки.", "Психолог, сертифікований тренер і коуч, експерт з управління людьми.", "16 років у сфері навчання, понад 750 проведених тренінгів.", "Експерт у побудові систем навчання (L&D), команд і управлінні проєктами.", "Дипломований спеціаліст у галузі навчання.", "Закінчив з відзнакою University of Texas at Austin за спеціальністю «Соціальна психологія поведінки та контролю»."]
        },
        {
            image: photo2,
            personName: "Павленко Катерина",
            description: "Старший регіональний менеджер з навчання, сертифікований коуч",
            experiene: ["Посада: Старший регіональний менеджер з навчання, сертифікований коуч.", "Досвід у фармацевтичній галузі: понад 15 років, зокрема навчання фармацевтів, кураторів та директорів у провідних аптечних мережах.", "Тренерська діяльність: 8 років у сфері наставництва, тренерства та побудови систем навчання в ТОП-3 аптечних мережах України.", "Кваліфікація: сертифікований спеціаліст у сфері розробки та впровадження навчальних програм.", "Досягнення: проведено понад 300 тренінгів для різних рівнів фахівців."]
        },
        {
            image: photo3,
            personName: "Кравченко Світлана",
            description: "Завідувач аптеки. Викладач Навчального Центру з адаптації нових співробітників",
            experiene: ["Стахановське медичне училище, спеціальність «Фармація».", "Київський медичний університет УАНМ, спеціальність «Фармація».", "Кваліфікація: фармацевт, диплом з відзнакою.", "Завідувачка аптеки з 2015 по 2023 роки.", "Викладачка навчального центру з адаптації нових співробітників з листопада 2024 року."]
        },
        {
            image: photo4,
            personName: "Кравчук Надія",
            description: "Менеджер з навчання персоналу, бізнес-тренер, методолог",
            experiene: ["Бізнес-тренер, менеджер з навчання персоналу, методолог.", "З відзнакою закінчила Тернопільську державну медичну академію у 2001 році, спеціальність «Лікувальна справа».", "Закінчила Національний фармацевтичний університет у 2008 році, спеціальність «Фармація».", "Співавтор підручника «Семіотика і діагностика внутрішніх хвороб (фізичні методи обстеження)», затвердженого МОЗ України."]
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
                        overlayStyle={{
                            background: 'rgba(0, 0, 0, 0.6)' /* Напівпрозоре чорне затемнення */
                        }}
                    >
                        {close => (
                            <div className="popup-modal">
                                <h1 className="close-modal-btn" onClick={close}>
                                    &times;
                                </h1>
                                <img src={data.image} alt={data.personName} />
                                <PersonDescription
                                    personName={data.personName}
                                    jobTitle={data.description}
                                    title="Професійний шлях і досягнення"
                                    description={data.experiene}
                                    customWidthh="1500px"
                                />
                            </div>
                        )}
                    </Popup>
                ))}
            </div>
        </div>
    );
};

export default Teaminfo;
