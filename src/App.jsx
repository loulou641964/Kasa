
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Page d'accueil
import About from './pages/About'; // Page "À propos"
import Header from './components/Header/Header'; // Importation du Header
import Footer from './components/Footer/Footer'; // Importation du Footer

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          {/* Définition des routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
