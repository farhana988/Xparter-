import React from "react";
import Portfolio from "../Components/Home/Portfolio";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Construction from "../Components/Home/Construction";
import EpicDesign from "../Components/Home/EpicDesign";
import Crafting from "../Components/Home/Crafting";
import ContactUs from "../Components/Home/ContactUs";

const Home = () => {
  return (
    <>
      <EpicDesign />
      <Portfolio />
      <Construction />
      <WhatWeDo />
      <Crafting/>
      <ContactUs/>
    </>
  );
};

export default Home;
