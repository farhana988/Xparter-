const EpicDesignCard = ({ cardBg, circleBg, card }) => {
  const { image, title, description } = card || {};
  return (
    <div
      className={`flex flex-col items-center text-center space-y-4 p-4 md:p-6 xl:p-10
                     ${cardBg}`}
    >
      <div
        className={`w-20 h-20 rounded-full ${circleBg} flex items-center justify-center`}
      >
        <img src={image} alt={title} className="w-14 h-14 object-cover" />
      </div>
      <div className="opacity-65">
        <h3 className="lg:text-lg font-semibold mb-4 lg:mb-6 uppercase noto-sans-display">
          {title}
        </h3>
        <p className="text-xs lg:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EpicDesignCard;
