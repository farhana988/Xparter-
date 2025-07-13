const Heading = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-12 mt-6 tracking-wider
         w-11/12 sm:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto 
    ${className}`}>
      <div className="text-3xl md:text-4xl font-bold">{title}</div>
      {subtitle && <p className="mt-6 font-light opacity-70">{subtitle}</p>}
    </div>
  );
};

export default Heading;
