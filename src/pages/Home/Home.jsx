// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import homeBanner from '../../assets/Banner.png'; // Correction ici
import rentalList from '../../data/logements.json';

function Home() {
  return (
    <main className="home">
      <Banner
        picture={homeBanner}
        title="Chez vous, partout et ailleurs"
        className="home-banner"
      />
      <section className="rental-section">
        <div className="rental-section__cards-container">
          {rentalList.map(({ id, cover, title }) => (
            <Link to={`/logement/${id}`} key={id} className="rental-card-link">
              <Card picture={cover} title={title} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;




