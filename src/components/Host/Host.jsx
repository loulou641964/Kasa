import PropTypes from "prop-types";
import "./Host.css";

function Host({ hostName, hostPicture, appreciation }) {
    // Convertir l'appréciation en nombre d'étoiles (par exemple, 1 à 5)
    const stars = Math.min(Math.max(parseInt(appreciation, 10), 0), 5); // Limite entre 0 et 5

    return (
        <div className="host-container">
            <div className="host-info">
                <p className="host-name">{hostName}</p>
                <img src={hostPicture} alt={`Photo de ${hostName}`} className="host-picture" />
            </div>
            <div className="host-appreciation">
                {/* Générer les étoiles */}
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${index < stars ? "filled" : ""}`}
                        aria-label={index < stars ? "Étoile pleine" : "Étoile vide"}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}

Host.propTypes = {
    hostName: PropTypes.string.isRequired,
    hostPicture: PropTypes.string.isRequired,
    appreciation: PropTypes.string.isRequired, // Par exemple, "5" pour 5 étoiles
};

export default Host;