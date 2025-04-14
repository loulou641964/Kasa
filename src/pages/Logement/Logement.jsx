import { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Slidshow from "../../components/Slidshow/Slidshow";
import ImageDetail from "../../components/ImageDetail/ImageDetail";

function Logement() {
    const params = useParams();
    const logement = logements.find(item => item.id === params.id);

    if (!logement) {
        console.error(`Logement with id ${params.id} not found.`);
        return <p>Logement introuvable</p>;
    }

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    if (selectedImageIndex !== null) {
        return <ImageDetail logementId={params.id} imageIndex={selectedImageIndex} />;
    }

    return (
        <div>
            <Slidshow images={logement.pictures} />
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
        </div>
    );
}

export default Logement;
