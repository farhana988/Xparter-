import bgImage from "../../assets/images/9. construction.jpg";
import FreePic from "../reusable/FreePic";

const Construction = () => {
  return (
    <section
      className="relative w-full flex items-center text-white
      h-full max-h-[425px] md:max-h-[500px] lg:max-h-[700px] xl:max-h-[900px] 
     "
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      <img src={bgImage} className="w-full h-full object-cover" />
      {/* Text content */}
      <div className="w-full absolute flex justify-end py-5 2xl:pl-20">
        <div className="max-w-1/2 pr-5 md:pr-8 xl:pr-14 2xl:pr-28">
          <h2
            className="md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-4 
          md:tracking-wide "
          >
            Construction and renovation projects
          </h2>
          <p
            className="text-[10px] md:text-xs lg:text-xs xl:text-base font-light 
            mb-2 md:mb-6 opacity-50 leading-tight md:leading-relaxed"
          >
            Reimagining and rebuilding digital platforms through thoughtful
            design, intuitive user experiences, and modern development
            practices. Whether starting from the ground up or revitalizing
            existing systems, each project is approached as a strategic
            renovation — carefully planned, purpose-driven, and built to enhance
            performance, accessibility, and long-term scalability across both
            web and mobile environments.
            <br className="hidden md:block" />
            <br /> image from <FreePic />
          </p>

          <button
            className="px-4 md:px-6 xl:px-10 py-1 md:py-2 xl:py-4 border-2
           text-xs md:text-base border-white rounded-md opacity-50
          "
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Construction;
