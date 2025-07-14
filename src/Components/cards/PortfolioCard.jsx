import Overlay from "../reusable/Overlay";

const PortfolioCard = ({ image }) => {
  const { src, caption } = image || {};
  return (
    <div className="overflow-hidden shadow-md">
      <div className="relative h-60 md:h-56 xl:h-80">
        <img
          src={src}
          loading="lazy"
          alt={caption || "image"}
          className="w-full h-full object-cover object-top"
        />
        <Overlay className="bg-black/30" />
      </div>

      {/* Caption */}
      <div className="w-full bg-white text-gray-600 text-center py-3 xl:py-5 font-semibold text-lg">
        {caption}
      </div>
    </div>
  );
};

export default PortfolioCard;
