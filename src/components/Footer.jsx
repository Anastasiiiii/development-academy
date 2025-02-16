import React from "react";
import "../styles/Footer.css";
import "../styles/Formulas.css";

const Footer = () => {

    return (
        <div className="footer-container">
            <p className="footer-text">Ваш шлях до успішної кар`єри<br></br> починається тут!</p>
            <div className="social-links-container">
                <p>Долучайтесь до наших соціальних мереж</p>
                <div class="social-links">
                    <a href="#" target="_blank">
                        Facebook
                    </a>
                    <a href="#" target="_blank">
                        Instagram
                    </a>
                    <a href="#" target="_blank">
                        TikTok
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;