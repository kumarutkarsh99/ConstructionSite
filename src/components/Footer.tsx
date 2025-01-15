import { Link } from "react-router-dom";
import './App.css';

function Footer() {
  return (
    <div className="container-fluid footer">
      <footer className="py-2 my-0">
        <ul className="nav justify-content-center border-bottom pb-1 mb-0">
          <li className="nav-item-footer">
            <Link
              aria-current="page"
              to="/"
              className="nav-link px-2 text-body-secondary"
            >
              Home
            </Link>
          </li>
          <li className="nav-item-footer">
            <Link
              aria-current="page"
              to="/contact"
              className="nav-link px-2 text-body-secondary"
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item-footer">
            <Link
              aria-current="page"
              to="/about"
              className="nav-link px-2 text-body-secondary"
            >
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary py-2 mb-0">
          Copyright © 2025 Utkarsh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
