import "./App.css";

import AnimatedCursor from "react-animated-cursor";

import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Skills from "./component/Skills/Skills";
import Services from "./component/Services/Services";
import Portfolio from "./component/Portfolio/Portfolio";
import Number from "./component/Number/Number";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={{ border: "3px solid #fff" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
