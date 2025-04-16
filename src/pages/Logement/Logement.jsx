//import { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Slidshow from "../../components/Slidshow/Slidshow";
//import ImageDetail from "../../components/ImageDetail/ImageDetail";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.css";

function Logement() {
    const params = useParams();
    const logement = logements.find(item => item.id === params.id);

    if (!logement) {
        console.error(`Logement with id ${params.id} not found.`);
        return <p>Logement introuvable</p>;
    }

   
    

    return (
        <div>
            {/* Diaporama */}
            <Slidshow images={logement.pictures} />

            {/* Informations principales */}
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="maincontent"> 
            <Collapse title="Description" textArray={[logement.description]} /> 
            {/* Description */}
            <Collapse title="Équipements" textArray={logement.equipments} /> 
            </div>
           

           
               
           
        </div>
    );
}

export default Logement;
