const ListCard = ({ underlineIndex, col }) => {
  const { id, title, items } = col || {};
  return (
    <div className="w-1/2 mx-auto md:w-full " id={`col-${id}`}>
      <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium mb-6 text-[#8A784E]
      noto-sans-display ">
        {title}
      </h3>
      <ul className="space-y-2 text-sm lg:text-base xl:text-lg opacity-60">
        {items.map((item, itemIndex) => (
          <li
            key={item.id}
            id={`item-${item.id}`}
            className={
              itemIndex === underlineIndex
                ? "underline underline-offset-4"
                : " hover:underline hover:underline-offset-4 cursor-pointer"
            }
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
