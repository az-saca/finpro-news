import { Link } from "react-router-dom";
import "../components/Navbar.css";

const Navbar = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = today.toLocaleDateString("id-ID", options);
  return (
    <div className="container">
      <div className="header row align-items-center mt-2 pb-3">
        <div className="col-2 ">
          <div className="date">{date}</div>
          <div className="date">Your Paper</div>
        </div>

        <div className="col-8 text-center">
          <Link to="/" className="logo">
            The New York Times
          </Link>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Indonesia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programming">
                  Programming
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/saved">
                  Saved
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
