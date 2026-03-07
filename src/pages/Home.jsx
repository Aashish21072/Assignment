import React, {useState} from "react";
import Versatile from "../components/Versatile";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Product from "../components/product";
import GetInTouch from "../components/GetInTouch";
import GlobalPartner from "../components/GlobalPartner";
import Footer from "../components/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <Versatile index={index} />
      <About />
      <Product index={index} setIndex={setIndex} />
      <GetInTouch />
      <GlobalPartner />
      <Footer />
    </div>
  );
};

export default Home;