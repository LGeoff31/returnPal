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
      <Homepage />
      <HowItWorks />
      <Questions />
    </>
  );
}
