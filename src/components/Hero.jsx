import chef_bg from "../assets/chef_bg.webp";

export default function Hero() {
  return (
    //bootstrap hero section with bg image, title, description and button
    <section
      className="hero d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${chef_bg})`,
        height: "100vh",
        backgroundSize: "cover",
        //fixed background image
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="overlay bg-black"
        style={{
          width: "100%",
          height: "100vh",
          opacity: "0.5",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></div>
      <div className="container text-center text-white z-2">
        <h1 className="display-1 fw-bolder">Chef</h1>
        <p className="lead">Cuisine de luxe dans le comfort de votre maison</p>
        <a className="nav-link" href="#services">
          <button className="btn btn-primary">Explorer nos Services</button>
        </a>
      </div>
    </section>
  );
}
