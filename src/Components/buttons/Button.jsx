const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`
        px-4 md:px-6 xl:px-10 py-1 md:py-2 xl:py-4 border-2
        text-xs md:text-sm xl:text-base rounded-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
