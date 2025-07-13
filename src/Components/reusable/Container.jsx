const Container = ({ children, className = "" }) => {
  return (
    <div className={`px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
