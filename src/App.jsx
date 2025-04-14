import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Page d'accueil
import About from './pages/About'; // Page "À propos"
import Header from './components/Header/Header'; // Importation du Header
import Footer from './components/Footer/Footer'; // Importation du Footer
import Logement from './pages/Logement/Logement'; // Page Logement
import ImageDetail from './components/ImageDetail/ImageDetail'; // Page pour afficher une image
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronUp, faChevronDown);

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Route pour la page "À propos" */}
          <Route path="/apropos" element={<About />} />
          
          {/* Route pour la page d'un logement */}
          <Route path="/logement/:id" element={<Logement />} />
          
          {/* Route pour afficher une image spécifique d'un logement */}
          <Route path="/logement/:logementId/image/:imageIndex" element={<ImageDetail />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
