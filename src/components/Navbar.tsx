import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary py-0"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid py-2 my-0">
        <Link aria-current="page" to="/" className="navbar-brand">
          India Constructions
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto pb-0 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About IC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/areas">
                Business Areas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Careers
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" aria-current="page" to="/opp">
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    aria-current="page"
                    to="/work"
                  >
                    Working at IC
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
