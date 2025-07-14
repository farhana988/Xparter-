import { lazy, Suspense } from "react";
import Banner from "../Components/Home/Banner";
import Spinner from "../Components/reusable/Spinner";

const Portfolio = lazy(() => import("../Components/Home/Portfolio"));
const WhatWeDo = lazy(() => import("../Components/Home/WhatWeDo"));
const Construction = lazy(() => import("../Components/Home/Construction"));
const EpicDesign = lazy(() => import("../Components/Home/EpicDesign"));
const Crafting = lazy(() => import("../Components/Home/Crafting"));
const ContactUs = lazy(() => import("../Components/Home/ContactUs"));
const Mockup = lazy(() => import("../Components/Home/Mockup"));
const BrandValues = lazy(() => import("../Components/Home/BrandValues"));

const Home = () => {
  return (
    <>
      <Banner />

      <Suspense fallback={<Spinner />}>
        <EpicDesign />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <BrandValues />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Construction />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <WhatWeDo />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Mockup />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Crafting />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <ContactUs />
      </Suspense>
    </>
  );
};

export default Home;
