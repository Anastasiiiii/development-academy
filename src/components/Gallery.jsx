import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "../styles/Gallery.css";
import "../styles/Formulas.css";
//images

import image1 from "../images/img7.jpg";
import image2 from "../images/upteka2.png";
import image3 from "../images/upteka.jpg";
import image4 from "../images/img9.jpeg";
import image5 from "../images/img8.jpeg";
import image6 from "../images/img3.jpeg";
import image7 from "../images/present.png";
import image8 from "../images/photo-zone.png";
import image9 from "../images/upteka(tablet).png";


const imagesDesktop = [image1, image6, image3, image4, image5, image7, image2, image8];
const imagesTablet = [image1, image6, image5, image4, image2, image9, image7, image8];
const imagesMobile = [image5, image7, image1, image3, image2, image8, image6, image4];

const Gallery = () => {
    const [images, setImages] = useState(imagesDesktop);

    useEffect(() => {
        const updateImages = () => {
            if (window.innerWidth <= 700) {
                setImages(imagesMobile);
            } else if (window.innerWidth <= 1100) {
                setImages(imagesTablet);
            } else {
                setImages(imagesDesktop);
            }
        };

        updateImages();
        window.addEventListener("resize", updateImages);

        return () => window.removeEventListener("resize", updateImages);
    }, []);

    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1
    };

    return (
        <div className="gallery-container">
            <Masonry breakpointCols={breakpointColumns} className="masonry-grid" columnClassName="masonry-column">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery ${index + 1}`} />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Gallery;