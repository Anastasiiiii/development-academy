import React from "react";
import "../styles/Advantages.css";

const Advantages = () => {
    const advantagesInfo = [
        "Живе спілкування та нові знайомства – взаємодія з викладачами та колегами у реальному часі.",
        "Занурення в професійне середовище – практика в умовах, наближених до реальної роботи.",
        "Навчання на сучасному обладнанні – робота з моделлю аптеки та справжнім програмним забезпеченням.",
        "Комфортні умови в столиці України – оплачуване житло та обід (250 грн/день).",
        "Безпека студентів – навчальні класи розташовані поруч із укриттям."
    ];

    return (
        <div className="advantages-container">
            <ul>
                {advantagesInfo.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
        </div>
    );
};

export default Advantages;
