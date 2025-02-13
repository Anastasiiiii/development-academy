import React from "react";
import "../styles/Quote.css";
import "../styles/Formulas.css";
import quoteIcon from "../images/icons/quote.png";

const Quote = () => {
    return (
        <div className="quote-container">
            <span class="quote-mark"><img src={quoteIcon} alt="quote" /></span>
            <blockquote>
                <p>
                    Динамічний розвиток компанії, в першу чергу, вимагає створення умов<br></br>
                    для постійного підвищення професійного рівня та розвитку персоналу.
                </p>
                <br></br>
                <p>
                    Завдяки нашій програмі, співробітники з першого дня роботи готові<br></br>
                    ефективно виконувати свої обов’язки.
                </p>
            </blockquote>
            <p class="quote-author">– підкреслює Олександр Севрюков.</p>
        </div>
    )
}

export default Quote;