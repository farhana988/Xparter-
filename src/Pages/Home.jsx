import React from "react";
import Portfolio from "../Components/Home/Portfolio";
import WhatWeDo from "../Components/Home/WhatWeDo";
import Construction from "../Components/Home/Construction";
import EpicDesign from "../Components/Home/EpicDesign";

const Home = () => {
  return (
    <>
      <EpicDesign />
      <Portfolio />
      <Construction />
      <WhatWeDo />
    </>
  );
};

export default Home;
