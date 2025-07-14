import bgImage from "../../assets/images/10. crafting.jpg";
import Button from "../buttons/Button";
import FreePic from "../reusable/FreePic";

const Crafting = () => {
  return (
    <section
      className="relative w-full flex items-center text-black 
      h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]
    transform transition-all duration-700 ease-out"
    >
      <img src={bgImage} className="w-full h-full object-cover" />
      {/* Text content */}
      <div className=" absolute left-2 md:left-6 lg:left-10 ">
        <div
          className=" bg-white py-6 md:py-10 lg:py-16
         px-3 md:px-6 xl:px-9"
        >
          <h2 className="md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-4">
            Crafting digital <br />
            experiences
          </h2>
          <p
            className="text-[10px] md:text-xs lg:text-base  
            mb-3 md:mb-6 opacity-70 leading-tight md:leading-relaxed"
          >
            Join the elite ranks od <br className="sm:hidden" /> sustained value
            creators
            <br /> <FreePic />
          </p>
          <Button className="bg-black text-white/70">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

export default Crafting;
