import { Link } from "react-router-dom";
import records from "./../../data/logements.json";
import './Cards.css';

function Cards() {
  return (
    <section className="photo-grid">
      {records.map((record) => {
        const { id, cover, title } = record;
        return (
          <article className="Cards" key={id}>
            <Link to={`/logement/${id}`} className="Cards-link">
            <div className="overlay"> </div>
              <div className="img-container">
                <img src={cover} alt={title} />
                <div className="Cards-title-overlay"> {/* AJOUT : DIV pour l'overlay */}
                  <h2>{title}</h2>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
}

export default Cards;

