import './Footer.css'; // Importation du fichier CSS pour les styles
import Logo from '../../assets/LOGO-white.png'; // Importation du logo
import Text from '../../assets/text.png'; // Importation du texte

function Footer() {  
  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" className="footer-logo" />
      <div className="footer-text">
        <img src={Text} alt="Texte du footer" className="footer-text-img" />
      </div>
    </footer>
  );
}

export default Footer;

