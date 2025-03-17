// src/components/Banner/Banner.jsx

import PropTypes from 'prop-types';
import './Banner.css'; // Assurez-vous d'avoir un fichier CSS correspondant

function Banner({ title, picture, className }) {
  return (
    <div className={`banner ${className}`}>
      <img className="banner__img" src={picture} alt={title} />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired, // Validation du titre
  picture: PropTypes.string.isRequired, // Validation de l'image
  className: PropTypes.string, // Classe CSS optionnelle
};

Banner.defaultProps = {
  className: '', // Classe par défaut si aucune n'est fournie
};

export default Banner;
