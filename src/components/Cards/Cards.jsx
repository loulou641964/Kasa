// Fichier Cards.jsx
import { Link } from "react-router-dom";
import records from "../datas/logements.json";
import "../Styles/Cards.css";

const Cards = () => {
    return (
        <div className="logements">
            {records.map((record) => {
                const { id, cover, title } = record;
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={`/logement/${id}`}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards;

