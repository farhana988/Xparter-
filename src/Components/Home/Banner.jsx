import dash from "../../assets/images/dash print.png";
import cross from "../../assets/images/cross.jpg";
import Button from "../buttons/Button";
import FreePic from "../reusable/FreePic";
import Container from "../reusable/Container";

const Banner = () => {
  return (
    <Container>
      <div
        className="relative mb-32 mx-auto
      max-w-[380px] md:max-w-[690px] lg:max-w-[950px] xl:max-w-[1320px]"
      >
        {/* card */}
        <div className="w-full md:w-3/4">
          <div className="pt-[450px] md:pt-40 lg:pt-60 xl:pt-72 ">
            <div className="bg-white w-full xl:h-[550px] px-6 lg:px-10 py-10 lg:py-20">
              <h2 className="text-2xl lg:text-[34px] xl:text-[40px] font-bold noto-sans-display">
                We Create Websites
              </h2>
              <p
                className="text-gray-600 text-xs lg:text-sm xl:text-base my-6 md:w-[45%] leading-relaxed
              font-medium"
              >
                We specialize in crafting modern, responsive websites that
                elevate your brand and engage your audience. From design to
                deployment, we bring your digital vision to life with precision
                and creativity.
              </p>
              <FreePic className="my-5" />
              <Button className="bg-black text-white uppercase opacity-95">
                view portfolio
              </Button>
            </div>
          </div>
        </div>
        {/* images */}
        <div
          className="absolute  bg-yellow z-10 top-0 right-0
          w-[250px] lg:w-[380px] xl:w-[490px] 
          h-[450px] lg:h-[600px] xl:h-[700px]  "
        ></div>
        <img
          className="absolute right-28 lg:right-40 top-20 lg:top-32 xl:top-40 object-cover z-20
          w-[250px] lg:w-[380px] xl:w-[580px] 
          h-[310px] lg:h-[410px] xl:h-[490px]"
          src={dash}
        />
        <img
          className="absolute top-6 lg:top-14 right-6 lg:right-14 object-cover z-30
          w-[305px] lg:w-[425px] xl:w-[595px] 
          h-[314px] lg:h-[414px] xl:h-[494px] "
          src={cross}
        />
      </div>
    </Container>
  );
};

export default Banner;
