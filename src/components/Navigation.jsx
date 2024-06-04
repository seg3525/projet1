import chef_icon from "../assets/chef_icon.svg";

export default function Navigation() {
  return (
    //bootstrap navbar, title on the left, links on the right with button at the end,
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top z-3 shadow-lg">
      <div className="container">
        <a className="navbar-brand  d-flex align-items-center" href="#">
          <img src={chef_icon} alt="logo" width="30px" />
          <span className="ms-2">Chef</span>
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experts">
                Experts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <button className="btn btn-primary">Prendre un RV</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
