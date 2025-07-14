import FreePic from "../reusable/FreePic";
import mock from "../../assets/images/mockup.jpg";

const cardData = [
  {
    id: 1,
    title: "Branding Strategy",
    description:
      "Develop a comprehensive plan that defines your brand's unique positioning and voice. This strategy ensures consistent messaging across all channels and builds long-term brand loyalty.",
  },
  {
    id: 2,
    title: "Designing logos",
    description:
      "Craft visually striking and memorable logos that capture the essence of your brand. We focus on simplicity, versatility, and timeless design to make your logo stand out.",
  },
  {
    id: 3,
    title: "Brand identity",
    description:
      "Create a cohesive brand identity that includes colors, typography, and imagery to communicate your values clearly. A strong identity helps your brand resonate emotionally with your audience.",
  },
];

const Mockup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto
    max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1440px]">
      {/* background image section */}
      <section
        className="bg-cover lg:bg-center col-span-1 lg:col-span-2
        h-60 md:h-[450px] lg:h-full"
        style={{ backgroundImage: `url(${mock})` }}
      ></section>

      {/* card section */}
      <section className="flex flex-col md:flex-row lg:flex-col items-center my-9 
      col-span-1 gap-8 lg:gap-0">
        {cardData.map(({ id, title, description }) => (
          <div key={id} className="w-10/12 h-full mb-2 xl:mb-4">
            <div className="bg-white px-6 pt-4 pb-7 xl:pb-14  h-full">
              <h3 className="text-lg xl:text-2xl font-bold mb-3 xl:mb-6">
                {title}
              </h3>
              <p className="text-xs xl:text-sm text-gray-600 font-medium">
                {description}
              </p>
              {id === 1 && <FreePic className="mt-4" />}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mockup;
