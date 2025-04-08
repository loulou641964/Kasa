import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";

function Logement() { 
    const params = useParams();
    const logement = logements.find(item => item.id === params.id);

    if (!logement) {
        console.error(`Logement with id ${params.id} not found.`);
        return <p>Logement introuvable</p>;
    }

    console.log(logement); 
    
    return ( 
        <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
        </div>
    );
}

export default Logement;
