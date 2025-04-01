import PropTypes from "prop-types";
import './Banner.css'; 

export default function Banner({ image,text }) {
	return (
		<div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
			<div className="banner-text-container">
				<div className="banner-text">{text} </div>
			</div>
		</div>
	);
}
 
Banner.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string
  };