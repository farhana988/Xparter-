const Container = ({ children, className = "" }) => {
  return (
    <div className={`mx-6 md:mx-10 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
