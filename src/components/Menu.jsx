import React from "react";
import "../styles/Menu.css";
import "../styles/Formulas.css";
import logo from "../images/logo.png";

const Menu = () => {
    return(
        <div className="menu-container">
            <nav className="menu">
                <img src={logo} alt="logo" />
                {/*Link to the main page of the pharmacy */}
                <a href="https://apteka911.ua/ua">https://apteka911.ua/ua</a>
            </nav>
        </div>
    )
}



export default Menu;