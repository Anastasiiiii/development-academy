import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/CommentsCarousel.css";

const CommentsCarousel = () => {
    const [index, setIndex] = useState(0);

    const commentData = [
        {
            personName: "Марія",
            profession: "Аптекар",
            text: "Мої враження від навчання дуже-дуже гарні. Я багато чого навчився за цей період навчання, а офлайн набагато кращий, ніж онлайн. Живе спілкування, і вчителі дуже гарно пояснюють. Велика їм вдячність! Все зрозуміло, все цікаво. Дякую!"
        },
        {
            personName: "Лілія",
            profession: "Аптекар",
            text: "Дуже цікаво! Тут така захоплива і класна атмосфера. Коли все відбувається наживо, тобі все показують, і ти можеш усе розглянути, навіть відчути. Можна ставити будь-які запитання, і тобі на них обов’язково дадуть відповідь."
        },
        {
            personName: "Олександра",
            profession: "Аптекар",
            text: "Після офлайн-навчання ви почуваєтеся більш ефективними, оскільки маєте достатньо спілкування з колегами та більше теоретичних знань для роботи."
        }
    ];

    const prevSlide = () => {
        setIndex(index === 0 ? commentData.length - 1 : index - 1);
    };

    const nextSlide = () => {
        setIndex(index === commentData.length - 1 ? 0 : index + 1);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-content">
                <h4>{commentData[index].personName}</h4>
                <p className="profession">{commentData[index].profession}</p>
                <p className="comment-text">{commentData[index].text}</p>
            </div>
            <button className="carousel-btn left" onClick={prevSlide}>
                <FaChevronLeft />
            </button>
            <button className="carousel-btn right" onClick={nextSlide}>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default CommentsCarousel;
