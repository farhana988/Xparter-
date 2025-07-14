const Spinner = () => {
  return (
    <div className={`flex justify-center items-center min-h-96`}>
      <div className="w-8 h-8 border-4 border-t-transparent border-black
      rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
