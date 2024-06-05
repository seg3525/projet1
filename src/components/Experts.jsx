import expert1 from "../assets/expert1.jpg";
import expert2 from "../assets/expert2.jpg";
import expert3 from "../assets/expert3.jpg";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function Experts() {
  const [modalIndex, setModalIndex] = useState(-1);

  const experts = [
    {
      name: "Boris",
      description: "15 ans d’expérience culinaire",
      longDescription:
        "15 ans d’expérience culinaire. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      image: expert1,
      price: "100$/h",
      blog: [
        {
          title: "Comment préparer un bon repas",
          content: "Voici les étapes pour préparer un bon repas...",
        },
        {
          title: "Les secrets de la cuisine",
          content: "Voici les secrets de la cuisine...",
        },
        {
          title: "Les différents types de cuisines",
          content: "Voici les différents types de cuisines...",
        },
      ],
    },
    {
      name: "Gordon",
      description: "Reconnu mondialement pour ses talents",
      longDescription:
        "Reconnu mondialement pour ses talents. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      image: expert2,
      price: "200$/h",
      blog: [
        {
          title: "Comment préparer un bon repas",
          content: "Voici les étapes pour préparer un bon repas...",
        },
        {
          title: "Les secrets de la cuisine",
          content: "Voici les secrets de la cuisine...",
        },
        {
          title: "Les différents types de cuisines",
          content: "Voici les différents types de cuisines...",
        },
      ],
    },
    {
      name: "Raj",
      description: "Mangera la moitié de votre repas",
      longDescription:
        "Mangera la moitié de votre repas. Vous pouvez choisir le menu ou laisser le chef décider pour vous. Vous pouvez aussi demander des plats spécifiques pour des régimes alimentaires particuliers.",
      image: expert3,
      price: "50$/h",
      blog: [
        {
          title: "Comment préparer un bon repas",
          content: "Voici les étapes pour préparer un bon repas...",
        },
        {
          title: "Les secrets de la cuisine",
          content: "Voici les secrets de la cuisine...",
        },
        {
          title: "Les différents types de cuisines",
          content: "Voici les différents types de cuisines...",
        },
      ],
    },
  ];

  return (
    <section id="experts" className="py-5">
      <div className="container px-5">
        <div className="row px-5">
          <h2 className="display-4 fw-bolder text-white">Nos Experts</h2>
          <p className="lead text-white mb-5">
            Voici les experts qui prépareront vos repas
          </p>
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card rounded-5">
              <img
                src={experts[0].image}
                className="card-img-top rounded-5"
                alt="expert1"
              />
              <div className="card-body">
                <h5 className="card-title">{experts[0].name}</h5>
                <p className="card-text">{experts[0].description}</p>
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
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card rounded-5">
              <img
                src={experts[1].image}
                className="card-img-top rounded-5"
                alt="expert2"
              />
              <div className="card-body">
                <h5 className="card-title">{experts[1].name}</h5>
                <p className="card-text">{experts[1].description}</p>
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
          <div className="col-lg-4 col-md-6 mt-3">
            <div className="card rounded-5">
              <img
                src={experts[2].image}
                className="card-img-top rounded-5"
                alt="expert3"
              />
              <div className="card-body">
                <h5 className="card-title">{experts[2].name}</h5>
                <p className="card-text">{experts[2].description}</p>
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
            {modalIndex !== -1 && experts[modalIndex].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalIndex !== -1 && experts[modalIndex].image}
            alt="photo chef"
            className="card-img-top rounded-3"
          />
          <p className="mt-2">
            {modalIndex !== -1 && experts[modalIndex].longDescription}
          </p>
          <br />
          <h2 className="mt-2">
            {modalIndex !== -1 && experts[modalIndex].price}
          </h2>
          <h3 className="mt-5">Blog</h3>
          {modalIndex !== -1 &&
            experts[modalIndex].blog.map((blog, index) => (
              <div key={index} className="card mt-2 p-3">
                <h5>{blog.title}</h5>
                <p>{blog.content}</p>
                <button type="button" className="btn btn-primary w-25">
                  Lire plus
                </button>
              </div>
            ))}
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
