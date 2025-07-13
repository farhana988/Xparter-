const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1400px] mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
