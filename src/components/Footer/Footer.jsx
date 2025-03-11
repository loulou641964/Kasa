
import './Footer.css'; // Importation du fichier CSS pour les styles
import Logo from '../../assets/footer.png'; // Importation du logo

function Footer() {  
  

  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" className="footer-logo" />
      <div className="footer-text">
       
      </div>
    </footer>
  );
}

export default Footer;

