
import PropTypes from "prop-types";
import "./Host.css";

function Host({ hostName, hostPicture, appreciation }) {
    return (
        <div className="host-container">
            {/* Informations de l'hôte */}
            <div className="host-info">
                <img src={hostPicture} alt={`Photo de ${hostName}`} className="host-picture" />
                <p className="host-name">{hostName}</p>
            </div>

            {/* Appréciation */}
            <div className="host-appreciation">
                <p>{appreciation}</p>
            </div>
        </div>
    );
}

Host.propTypes = {
    hostName: PropTypes.string.isRequired,
    hostPicture: PropTypes.string.isRequired,
    appreciation: PropTypes.string.isRequired,
};

export default Host;