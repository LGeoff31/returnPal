import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="section1">
        <Homepage />
      </Element>
      <Element name="section2">
        <HowItWorks />
      </Element>
      <Element name="section3">
        <About />
      </Element>
      <Element name="section4">
        <Pricing />
      </Element>
      <Questions />
      <Element name="section5">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}
