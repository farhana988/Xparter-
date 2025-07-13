import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto shadow-2xl">
      <Navbar />
      <div className="container mx-auto mt-16 px-5 xl:px-0 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
