import imageData from "../data/imageData";
import Container from "./reusable/Container";
import Heading from "./reusable/Heading";

const Portfolio = () => {
  return (
    <div className="bg-zinc-800 py-10">
      {/* Heading */}
      <Heading
        title={"Portfolio"}
        subtitle={
          "From responsive websites and mobile applications to branding and corporate design, here’s a glimpse into the digital solutions, crafted to solve real-world problems through thoughtful design and user experience."
        }
        className="text-white"
      />

      {/* Card */}
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imageData?.map((image) => (
          <div key={image.id} className="overflow-hidden shadow-md">
            <div className="relative h-60 md:h-56 xl:h-80">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            </div>

            {/* Caption */}
            <div className="w-full bg-white text-gray-600 text-center py-3 xl:py-5 font-semibold text-lg">
              {image.caption}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Portfolio;
