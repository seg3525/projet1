import contact_chef from "../assets/contact_chef.jpg";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import confirm from "../assets/confirm.svg";

export default function Contact() {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [amountOfBookings, setAmountOfBookings] = useState(1);

  return (
    <section id="contact" className="py-5 text-white bg-dark">
      <div className="container">
        <div className="row">
          <h2 className="display-4 fw-bolder" data-aos="fade-up">
            Contactez-nous
          </h2>
          <p className="lead" data-aos="fade-up">
            Remplissez le formulaire ci-dessous pour prendre un rendez-vous
          </p>
          <div className="d-flex flex-row justify-content-between align-items-center gap-3 flex-wrap">
            <div data-aos="fade-up">
              <img
                src={contact_chef}
                alt="contact_chef"
                className="rounded-3"
              />
            </div>
            <div className="" style={{ width: "50%" }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConfirmationOpen(true);
                }}
              >
                <div className="mb-3" data-aos="fade-up">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nom complet"
                    required
                  />
                </div>
                <div className="mb-3" data-aos="fade-up">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Courriel"
                    required
                  />
                </div>
                <div className="mb-3" data-aos="fade-up">
                  <label htmlFor="service" className="form-label">
                    Service
                  </label>
                  <select className="form-select" id="service" required>
                    <option value="">Choisissez un service</option>
                    <option value="1">Chef Personel</option>
                    <option value="2">Cours de cuisine</option>
                    <option value="3">Évenement</option>
                  </select>
                </div>
                <div className="mb-3" data-aos="fade-up">
                  <label htmlFor="expert" className="form-label">
                    Expert
                  </label>
                  <select className="form-select" id="expert" required>
                    <option value="">Choisissez un expert</option>
                    <option value="1">Boris</option>
                    <option value="2">Gordon</option>
                    <option value="3">Raj</option>
                  </select>
                </div>
                <div className="mb-3" data-aos="fade-up">
                  <label
                    htmlFor="date"
                    className="form-label d-flex flex-row gap-2 align-items-center justify-content-between"
                  >
                    Date et Heure
                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <button
                        className="btn btn-secondary"
                        disabled={amountOfBookings === 5}
                        onClick={() => {
                          setAmountOfBookings(amountOfBookings + 1);
                        }}
                      >
                        <i className="bi bi-plus" />
                      </button>
                      <button
                        className="btn btn-secondary"
                        disabled={amountOfBookings === 1}
                        onClick={() => {
                          setAmountOfBookings(amountOfBookings - 1);
                        }}
                      >
                        <i className="bi bi-dash" />
                      </button>
                    </div>
                  </label>
                  <div className="d-flex flex-column gap-2">
                    {[...Array(amountOfBookings)].map((_, index) => (
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="date"
                        required
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-aos="fade-up"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal show={confirmationOpen} onHide={() => setConfirmationOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={confirm} alt="confirm" className="rounded-3" />
          <p>Votre rendez-vous est confirmé</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setConfirmationOpen(false)}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
