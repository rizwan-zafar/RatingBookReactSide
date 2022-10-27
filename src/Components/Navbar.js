import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <section className="nav_section">
        <div className="container">
          <div className="custom_nav2">
            <nav className="navbar navbar-expand custom_nav-container ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/testimonials">
                        Testimonial
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About US{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/help">
                        Help
                      </Link>
                    </li>
                    <Outlet />
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
