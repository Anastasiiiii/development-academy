import React from "react";
import "../styles/Header.css";
import "../styles/Formulas.css";

const Header = () => {

    const scrollToForm = () => {
        document.getElementById("form-registration").scrollIntoView({ behavior: "smooth" });
    };

    const scrollToDetails = () => {
        document.getElementById("details-container").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="header-container">
            <h1>Побудуйте Своє <br></br> Майбутнє з Аптекою 9&#183;1&#183;1</h1>
            <p>Освітні програми, реальний досвід та підтримка <br></br> для вашого успіху</p>
            {/*Buttons to find form and course info in header div*/}
            <div className="header-button-container">
                <button onClick={scrollToForm}>Приєднатись до навчання</button>
                <button onClick={scrollToDetails}>Дізнатись більше</button>
            </div>
        </div>
    )
}

export default Header;