import Logo from "../../assets/footer.png"; // Assurez-vous que le chemin est correct
import "./Footer.css";

const currentYear = new Date().getFullYear();

function Footer  ()  {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">&copy; {currentYear} Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
