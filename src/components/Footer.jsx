//import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Liens</h4>
            <ul className="list-unstyled">
              <li>
                <a className="text-white" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-white" href="#experts">
                  Experts
                </a>
              </li>
              <li>
                <a className="text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>{"Heures d'ouverture"}</h4>
            <ul className="list-unstyled">
              <li>Lundi - Vendredi: 9h - 18h</li>
              <li>Samedi: 10h - 16h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>123-456-7890</li>
              <li>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-facebook fs-5" />
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-twitter fs-5" />
                </a>
                <a href="#" className="text-white me-3">
                  <i className="bi bi-instagram fs-5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Adresse</h4>
            <ul className="list-unstyled">
              <li>123 rue de la rue</li>
              <li>Montréal, QC</li>
              <li>H1H 1H1</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
