
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; // Page d'accueil
import About from './pages/About'; // Page "À propos"
import Header from './components/Header/Header'; // Importation du Header
import Footer from './components/Footer/Footer'; // Importation du Footer
import Logement from './pages/Logement/Logement';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronUp, faChevronDown);
function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Définition des routes */}
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path ="/logement/:id"element= {<Logement />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
