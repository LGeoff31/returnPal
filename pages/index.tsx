import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <HowItWorks />
      <Questions />
      <Footer />
    </>
  );
}
