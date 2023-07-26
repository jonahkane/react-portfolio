import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Jonah Kane</h1>
      <div className="links">
        <Link to="/about" style={{ color: "var(--blue)" }}>
          About me
        </Link>
        <Link to="/portfolio" style={{ color: "var(--indigo)" }}>
          Portfolio
        </Link>
        <Link to="/contact" style={{ color: "var(--teal)" }}>
          Contact
        </Link>
        <Link to="/resume" style={{ color: "var(--cyan)" }}>
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
