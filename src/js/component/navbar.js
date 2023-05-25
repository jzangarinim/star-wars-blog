import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 p-0">
      <div className="container-fluid d-flex">
        <Link to="/" className="col-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
            className="col-12"
          />
        </Link>
        {/* Maybe use Bootstrap Offcanvas for favorites? */}
        <div className="btn-group me-3">
          <button
            type="button"
            className="btn btn-warning dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end bg-warning">
            <li>
              <button
                className="dropdown-item bg-warning border-top border-bottom border-dark"
                type="button"
              >
                Option 1
              </button>
            </li>
            <li>
              <button
                className="dropdown-item bg-warning border-bottom border-dark"
                type="button"
              >
                Option 2
              </button>
            </li>
            <li>
              <button
                className="dropdown-item bg-warning border-bottom border-dark"
                type="button"
              >
                Option 3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
