import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Page d'accueil
import About from './pages/About'; // Page "À propos"
import Header from './components/Header/Header'; // Importation du Header
import Footer from './components/Footer/Footer'; // Importation du Footer
import Logement from './pages/Logement/Logement'; // Page Logement
import Error404 from './pages/Error404/Error404'; // Page 404
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
library.add(faChevronUp, faChevronDown);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={<Home />} />
            
            {/* Route pour la page "À propos" */}
            <Route path="/apropos" element={<About />} />
            
            {/* Route pour la page d'un logement */}
            <Route path="/logement/:id" element={<Logement />} />
            
            {/* Route pour les pages non trouvées */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;