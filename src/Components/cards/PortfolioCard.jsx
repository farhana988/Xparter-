import Overlay from "../reusable/Overlay";

const PortfolioCard = ({ image }) => {
  const { src, caption } = image || {};
  return (
    <div className="overflow-hidden hover:duration-700 hover:ease-in-out hover:-translate-y-2">
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
      <div
        className="w-full bg-white text-gray-600 text-center py-3 xl:py-5
      text-lg noto-sans-display font-medium"
      >
        {caption}
      </div>
    </div>
  );
};

export default PortfolioCard;
