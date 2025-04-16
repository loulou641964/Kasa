import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.css";

function Collapse({ title, textArray }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <button 
        className={`collapse__header ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>
        <FontAwesomeIcon 
          icon={faChevronUp} 
          className={`collapse__chevron ${isOpen ? 'rotated' : ''}`}
        />
      </button>

      <div className={`collapse__content ${isOpen ? 'is-open' : ''}`}>
        {textArray.map((item, index) => (
          <div key={`item-${index}`} className="collapse__item">{item}</div>
        ))}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Collapse;