const FreePic = ({ className = "" }) => {
  return (
    <p
      className={`tracking-tight text-xs xl:text-base opacity-70 font-medium ${className}`}
    >
      Image from{" "}
      <a
        href="https://www.freepik.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        Freepik
      </a>
    </p>
  );
};

export default FreePic;
