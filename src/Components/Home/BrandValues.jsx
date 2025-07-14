import img1 from "../../assets/images/8. brand value 1.jpg";
import img2 from "../../assets/images/8. brand value 2.jpg";
import img3 from "../../assets/images/8. brand value 3.avif";
import Button from "../buttons/Button";
import Container from "../reusable/Container";
import FreePic from "../reusable/FreePic";

const BrandValues = () => {
  return (
    <Container>
      <div
        className="relative my-12 mx-auto
      max-w-[380px] md:max-w-[690px] lg:max-w-[950px] xl:max-w-[1320px]"
      >
        {/* Image */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-2">
            <img
              src={img1}
              alt="img1"
              className="w-10/12 ml-auto xl:h-96 object-cover "
            />
            <img
              src={img2}
              alt="img2"
              className="w-full xl:h-96 object-cover "
            />
          </div>

          <div className="flex items-center">
            <img
              src={img3}
              alt="img3"
              className="w-full h-[188px] md:h-[288px] lg:h-[428px] xl:h-[528px] object-cover 
            "
            />
          </div>
        </div>

        {/* Card */}
        <div
          className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2
       bg-black text-white p-1 md:p-3 lg:p-6 w-1/3 md:w-3/12 text-center"
        >
          <h2 className="md:text-xl lg:text-3xl xl:text-4xl font-bold noto-sans-display">
            Brand Values
          </h2>
          <p
            className="text-[8px] md:text-xs lg:text-sm xl:text-base
          opacity-60 my-[2px] md:my-2 lg:my-4 leading-tight tracking-tight"
          >
            Our brand values guide every decision we make. They reflect our
            commitment to quality, creativity, and trust.
          </p>
          <FreePic />
          <Button className="uppercase mt-4">learn more</Button>
        </div>
      </div>
    </Container>
  );
};

export default BrandValues;
