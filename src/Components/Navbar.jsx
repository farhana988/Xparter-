import { useState } from "react";
import menuItems from "../data/menuItems";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white z-50 px-3 md:px-10 py-3
      flex items-center justify-between shadow-md"
    >
      {/* Logo */}
      <div className="text-xl font-semibold opacity-40">logo</div>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-2xl opacity-80 font-semibold"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full right-0 w-1/2 lg:w-1/3 rounded shadow-lg text-center
          p-4 z-40 animate-slide-down bg-white"
        >
          {menuItems?.map(({ label, link }, index) => (
            <div key={index}>
              <Link
                to={link}
                onClick={handleLinkClick}
                className="block px-2 py-1 rounded "
              >
                {label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
