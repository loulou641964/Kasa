import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Slidshow from "../../components/Slidshow/Slidshow";
import Collapse from "../../components/Collapse/Collapse";
import Tags from "../../components/Tags/Tags"; // Import du composant Tags
import Host from "../../components/Host/Host"; // Import du composant Host
import Error404 from "../Error404/Error404";
import "./Logement.css";

function Logement() {
    const params = useParams();
    const logement = logements.find(item => item.id === params.id);

    if (!logement) {
        // Redirection vers la page 404 si le logement n'existe pas
        return <Error404 />;
        // Ou, si vous préférez une vraie redirection :
        // return <Navigate to="/404" />;
    }

    return (
        <section>
            {/* Diaporama */}
            <Slidshow images={logement.pictures} />
            <article className="logement-info">
                <div className="logement-info-left">
                    {/* Informations principales */}
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    {/* Tags */}
                    <Tags tags={logement.tags} />
                </div>
                {/* Informations de l'hôte */}
                <Host
                    hostName={logement.host.name}
                    hostPicture={logement.host.picture}
                    appreciation={logement.rating}
                />
            </article>
            

            {/* Description et Équipements */}
            <div className="maincontent">
                <Collapse title="Description" textArray={[logement.description]} />
                <Collapse title="Équipements" textArray={logement.equipments} />
            </div>
        </section>
    );
}

export default Logement;