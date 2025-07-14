import strategyImg from "../assets/images/Strategy.png";
import brandingImg from "../assets/images/Branding.png";
import developmentImg from "../assets/images/code.png";
import webDesignImg from "../assets/images/WebDesign.png";

const epicDesignData = [
  {
    id: 1,
    image: strategyImg,
    title: "Strategy",
    description:
      "Focused, research-driven planning that sets a clear direction for impactful digital experiences.",
  },
  {
    id: 2,
    image: brandingImg,
    title: "Branding",
    description:
      "Creating memorable, consistent brand identities that connect with your audience.",
    cardBg: "bg-white",
    circleBg: "bg-yellow",
  },
  {
    id: 3,
    image: developmentImg,
    title: "Development",
    description:
      "Building fast, scalable, and reliable digital solutions across web and mobile platforms.",
  },
  {
    id: 4,
    image: webDesignImg,
    title: "Web Design",
    description:
      "Designing beautiful, user-friendly websites that blend form and function effortlessly.",
    cardBg: "bg-yellow text-white",
    circleBg: "bg-white",
  },
];

export default epicDesignData;
