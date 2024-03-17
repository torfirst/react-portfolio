// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav className="navbar bg-secondary">
      
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-ul">
          <Link className="nav-link text-light" to="/">
          About Me
        </Link>
        <Link className="nav-link text-light" to="/contact">
          Contact
        </Link>
        <Link className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link text-light" to="/resume">
          Resume
        </Link>
          </ul>
    </nav>
  );
}
