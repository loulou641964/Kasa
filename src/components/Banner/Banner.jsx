import bannerImage from '../../assets/banner_home.png'; // Assurez-vous que le chemin est correct
import './Banner.css'; 
export default function Banner() {
	return (
		<div className="banner-container" style={{ backgroundImage: `url(${bannerImage})` }}>
			<div className="banner-text-container">
				<div className="banner-text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}
