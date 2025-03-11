import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from "../../assets/LOGO(1).png"; 

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={Logo} alt="Logo" />
      <ul className="links">
        <NavLink to="/accueil" className={location.pathname === "/accueil" ? "active" : ""}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/apropos" className={location.pathname === "/apropos" ? "active" : ""}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
