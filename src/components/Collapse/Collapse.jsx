import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Collapse.css";

function Collapse({ title, textArray }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "is-open" : "is-close"}`}>
      <button className="collapse__title" onClick={toggleCollapse}>
        <span className="collapse__title-text">{title}</span>
        <FontAwesomeIcon 
          icon={faChevronUp} 
          className="collapse__chevron"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      <div className={`collapse__text ${isOpen ? "is-open" : "is-close"}`}>
        {textArray.map((item, index) => (
          <p key={`item-${index}`}>{item}</p>
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
