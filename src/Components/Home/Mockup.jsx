import FreePic from "../reusable/FreePic";

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
    <div className="grid grid-cols-2 py-10 ">
      {/* image */}
      <section></section>
      {/* card */}
      <section className="flex flex-col items-end mr-20 gap-6 border">
        {cardData.map(({ id, title, description }) => (
          <div
            key={id}
            className="border px-4 pt-4 pb-14 shadow-md bg-white w-2/3 right-auto"
          >
            <h3 className="text-2xl font-bold mb-6">{title}</h3>
            <p className="text-sm text-gray-600 font-medium">{description}</p>
            {id === 1 && <FreePic className="mt-4" />}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mockup;
