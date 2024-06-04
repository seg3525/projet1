import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.jpg";
import chef4 from "../assets/chef4.jpg";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function Services() {
  const [modalIndex, setModalIndex] = useState(-1);

  const services = [
    {
      title: "Chef Personel",
      description:
        "Un repas haute qualité préparé entièrement par un de nos chefs",
      longDescription:
        "Un repas haute qualité préparé entièrement par un de nos chefs. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      price: "100$ + salaire du chef",
      image: chef1,
    },
    {
      title: "Cours de cuisine",
      description: "Un cours pour toute la famille",
      longDescription:
        "Un cours pour toute la famille. Vous pouvez apprendre à cuisiner des plats simples ou plus complexes. Vous pouvez aussi demander des cours pour des régimes alimentaires particuliers.",
      price: "50$ par personne",
      image: chef2,
    },
    {
      title: "Évenement",
      description: "Préparation par nos spécialistes pour un évenement",
      longDescription:
        "Préparation par nos spécialistes pour un évenement. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      price: "200$ + salaire du chef",
      image: chef3,
    },
    {
      title: "Expérience Michelin",

      description: "L'expérience culinaire de luxe",
      longDescription:
        "L'expérience culinaire de luxe. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      price: "500$ + salaire du chef",
      image: chef4,
    },
  ];

  return (
    <section id="services" className="bg-dark py-5">
      <div className="container">
        <h2 className="display-4 fw-bolder text-white">Nos Services</h2>
        <p className="lead text-white mb-5">
          Voici les différents services que nous offrons
        </p>
        <div className="row g-4 mt-5 d-flex justify-content-center align-items-start">
          <div className="col-md-6 col-lg-3">
            <div className="card rounded-3">
              <img
                src={services[0].image}
                alt="chef1"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">{services[0].title}</h5>
                <p className="card-text">{services[0].description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setModalIndex(0);
                  }}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            style={{ display: "flex", height: "100%" }}
          >
            <div className="card rounded-3">
              <img
                src={services[1].image}
                alt="chef2"
                className="card-img-top  rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">{services[1].title}</h5>
                <p className="card-text">{services[1].description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setModalIndex(1);
                  }}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" style={{ height: "100%" }}>
            <div className="card rounded-3">
              <img
                src={services[2].image}
                alt="chef3"
                className="card-img-top rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">{services[2].title}</h5>
                <p className="card-text">{services[2].description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setModalIndex(2);
                  }}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card  rounded-3">
              <img
                src={services[3].image}
                alt="chef4"
                className="card-img-top  rounded-3"
              />
              <div className="card-body">
                <h5 className="card-title">{services[3].title}</h5>
                <p className="card-text">{services[3].description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setModalIndex(3);
                  }}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={modalIndex !== -1}
        onHide={() => {
          setModalIndex(-1);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {modalIndex !== -1 && services[modalIndex].title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalIndex !== -1 && services[modalIndex].image}
            alt="photo chef"
            className="card-img-top rounded-3"
          />
          <p className="mt-2">
            {modalIndex !== -1 && services[modalIndex].longDescription}
          </p>
          <br />
          <h2 className="mt-2">
            {modalIndex !== -1 && services[modalIndex].price}
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setModalIndex(-1);
            }}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
