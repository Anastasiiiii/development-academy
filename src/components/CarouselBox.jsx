import React from "react";
import CommentsCarousel from "./CommentsCarousel";
import "../styles/CarouselBox.css";
import "../styles/Formulas.css";

const CarouselBox = () => {
    return(
        <div className="carousel-box-container">
            <h1>Відгуки Співробітників</h1>
            <CommentsCarousel />
        </div>
    )
}

export default CarouselBox;