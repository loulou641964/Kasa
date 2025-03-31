import './Banner.css'; 

export default function Banner({ image }) {
	return (
		<div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
			<div className="banner-text-container">
				<div className="banner-text">Chez vous, partout et ailleurs</div>
			</div>
		</div>
	);
}
