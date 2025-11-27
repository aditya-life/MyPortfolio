import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Portfolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#techstack">Tech Stack</a>
            </li>

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#experience">Experience</a>
            </li>

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link hover-scale" href="#contact">Contact</a>
            </li>

            {user?.email && (
              <li className="nav-item">
                <Link className="nav-link hover-scale" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
