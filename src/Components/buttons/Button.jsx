const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`px-4 md:px-6 xl:px-10 py-1 md:py-2 lg:py-3 uppercase cursor-pointer
        tracking-tighter lg:tracking-wider text-[10px] md:text-sm xl:text-base rounded-md 
        lg:rounded-lg ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
