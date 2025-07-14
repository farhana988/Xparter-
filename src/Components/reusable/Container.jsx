const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
