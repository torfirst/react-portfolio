// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <>
    <header>
      <h1 className="title">tor first</h1>
      </header>
    <nav className="navbar">
          <ul className="" id="navLinks">
          <Link className="nav-link text-light" to="/">
          About Me 
        </Link>
        <Link className="nav-link text-light" to="/portfolio">
          Portfolio 
        </Link>
        <Link className="nav-link text-light" to="/contact">
          Contact 
        </Link>
        <Link className="nav-link text-light" to="/resume">
          Resume 
        </Link>
          </ul>
    </nav>
    </>
  );
}
