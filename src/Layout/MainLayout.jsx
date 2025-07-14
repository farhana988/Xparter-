import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto shadow-2xl">
      <Navbar />
      <div className="pt-16 min-h-screen bg-[#ddcfc6]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
