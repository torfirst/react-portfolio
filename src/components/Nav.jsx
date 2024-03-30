// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <>
    <header>
      <h1 className="title">tor first</h1>
      </header>
    <nav className="navbar">
          <ul id="navLinks">
          <Link className="nav-link text-light" to="/">
          about me 
        </Link>
        <Link className="nav-link text-light" to="/portfolio">
          portfolio 
        </Link>
        <Link className="nav-link text-light" to="/contact">
          contact 
        </Link>
        <Link className="nav-link text-light" to="/resume">
          resume 
        </Link>
          </ul>
    </nav>
    </>
  );
}
