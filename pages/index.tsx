import About from "./components/About";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Homepage />
      </Element>
      <Element name="how-it-works">
        <HowItWorks />
      </Element>
      <About />
      <Questions />
      <Footer />
    </>
  );
}
