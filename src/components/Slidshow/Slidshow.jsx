import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Slidshow.css";
import PropTypes from "prop-types";

function Slidshow({ images = [] }) {
    const [current, setCurrent] = useState(0);
    useParams(); // id n'est pas utilisé ici, donc on peut l'ignorer
    const length = Array.isArray(images) ? images.length : 0;

    if (!Array.isArray(images) || length === 0) {
        return <p>Aucune image disponible</p>;
    }

    const nextImage = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    };

    return (
        <div className="slidshow-container">
            {images.map((image, index) => (
                <div
                    key={image || index}
                    className={index === current ? "slid active" : "slid"}
                >
                    {index === current && (
                        <img
                            className="housing-img"
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    )}
                </div>
            ))}

            {length > 1 && (
                <div className="slidshow-controls">
                    <span
                        onClick={prevImage}
                        className="arrow left"
                        role="button"
                        aria-label="Previous slide"
                        tabIndex={0}
                    >
                        &#x2039;
                    </span>
                    <span
                        onClick={nextImage}
                        className="arrow right"
                        role="button"
                        aria-label="Next slide"
                        tabIndex={0}
                    >
                        &#x203A;
                    </span>
                </div>
            )}

            {length > 1 && (
                <div className="slidshow-counter">
                    <p>
                        {current + 1}/{length}
                    </p>
                </div>
            )}
        </div>
    );
}

Slidshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};

export default Slidshow;



