import React from "react";
import Portfolio from "../Components/Home/Portfolio";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Construction from "../Components/Home/Construction";
import EpicDesign from "../Components/Home/EpicDesign";
import Crafting from "../Components/Home/Crafting";
import ContactUs from "../Components/Home/ContactUs";
import Mockup from "../Components/Home/Mockup";
import Banner from "../Components/Home/Banner";
import BrandValues from "../Components/Home/BrandValues";

const Home = () => {
  return (
    <>
      <Banner />
      <EpicDesign />
      <Portfolio />
      <BrandValues/>
      <Construction />
      <WhatWeDo />
      <Mockup />
      <Crafting />
      <ContactUs />
    </>
  );
};

export default Home;
