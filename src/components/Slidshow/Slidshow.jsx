import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Slidshow.css";
import PropTypes from "prop-types";

function Slidshow({ images = [] }) {
    const [current, setCurrent] = useState(0);
    const { id } = useParams();
    const length = Array.isArray(images) ? images.length : 0;

    if (length === 0) {
        return <p>Aucune image disponible</p>;
    }

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slidshow-container">
            {images.map((image, index) => (
                <div key={index} className={index === current ? "slid active" : "slid"}>
                    {index === current && (
                        <Link to={`/logement/${id}/image/${index}`}>
                            <img className="housing-img" src={image} alt={`Slide ${index + 1}`} />
                        </Link>
                    )}
                </div>
            ))}

            {length > 1 && (
                <div className="slidshow-controls">
                    <span onClick={prevImage} className="arrow left" role="button" aria-label="Previous slide">
                        &#x2039;
                    </span>
                    <span onClick={nextImage} className="arrow right" role="button" aria-label="Next slide">
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




