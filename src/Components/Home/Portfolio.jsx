import imageData from "../../data/imageData";
import PortfolioCard from "../cards/PortfolioCard";
import Container from "../reusable/Container";
import FreePic from "../reusable/FreePic";
import Heading from "../reusable/Heading";

const Portfolio = () => {
  return (
    <div className="bg-[#292d33] pt-10 pb-16 text-white ">
      {/* Heading */}
      <Heading
        title={"Portfolio"}
        subtitle={
          "From responsive websites and mobile applications to branding and corporate design, here’s a glimpse into the digital solutions, crafted to solve real-world problems through thoughtful design and user experience."
        }
        className="font-light"
      />

      {/* Card */}
      <Container
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto
       max-w-[425px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]"
      >
        {imageData?.map((image) => (
          <PortfolioCard key={image.id} image={image} />
        ))}
      </Container>

      <FreePic className="flex justify-center mt-10 " />
    </div>
  );
};

export default Portfolio;
