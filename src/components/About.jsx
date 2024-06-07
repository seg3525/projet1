import chef_icon from "../assets/chef_icon.svg";

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 text-white">
            <h2 className="display-4 fw-bolder" data-aos="fade-up">
              À propos de nous
            </h2>
            <p className="lead" data-aos="fade-up">
              {"C'est plus qu'un service, c'est une expérience culinaire."}
            </p>
            <div className="py-5">
              <p data-aos="fade-up">
                Nous sommes une équipe de chefs professionnels qui vous offrent
                un service de qualité pour vos événements.
              </p>
              <p data-aos="fade-up">
                Nous sommes passionnés par la cuisine et nous mettons tout en
                œuvre pour vous offrir une expérience culinaire inoubliable.
              </p>
              <p data-aos="fade-up">
                Prenez rendez-vous avec nous pour découvrir nos services et nos
                plats délicieux.
              </p>
              <button className="btn btn-primary" data-aos="fade-up">
                <a href="#services" className="text-white text-decoration-none">
                  {" "}
                  En savoir plus{" "}
                </a>
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img
              src={chef_icon}
              alt="chef_icon"
              className="img-fluid rounded-3 z-1"
              data-aos="fade-up"
              width="400px"
            />

            <img
              src={chef_icon}
              alt="chef_icon"
              className="position-absolute z-0 opacity-25"
              style={{
                transform: "translate(50px, 30px)",
              }}
              data-aos="fade-up"
              width="400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
