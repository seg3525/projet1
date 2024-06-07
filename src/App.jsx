import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({ duration: 700 });
  }, []);
  return (
    <>
      <Navigation />
      <Hero />
      <div className="bg-black">
        <About />
        <Services />
        <Experts />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
