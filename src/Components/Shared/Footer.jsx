const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-6 text-center">
      <p className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()} <b>Xpartex</b>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
