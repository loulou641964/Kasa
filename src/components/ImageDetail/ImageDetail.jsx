import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import "./ImageDetail.css";

function ImageDetail() {
    const { logementId, imageIndex } = useParams();
    const logement = logements.find(item => item.id === logementId);

    if (!logement) {
        console.error(`Logement with id ${logementId} not found.`);
        return <p>Logement introuvable</p>;
    }

    const image = logement.pictures[imageIndex];

    if (!image) {
        console.error(`Image with index ${imageIndex} not found.`);
        return <p>Image introuvable</p>;
    }

    return (
        <div className="image-detail-container">
            <img src={image} alt={`Image ${parseInt(imageIndex) + 1}`} className="image-detail" />
            <p className="image-description">{logement.description}</p>
        </div>
    );
}

export default ImageDetail;