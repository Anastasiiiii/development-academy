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
                    <a href="https://www.facebook.com/apteki911" target="facebook">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/apteka_911/" target="instagram">
                        Instagram
                    </a>
                    <a href="https://www.tiktok.com/@apteka.911" target="tiktok">
                        TikTok
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;