import columns from "../../data/columnsData";
import ListCard from "../cards/ListCard";
import Container from "../reusable/Container";
import Heading from "../reusable/Heading";

const WhatWeDo = () => {
  const getUnderline = (colIndex, length) => {
    if (colIndex === 0) return length - 1;
    if (colIndex === 1) return length - 3;
    if (colIndex === 2) return length - 4;
    return -1;
  };
  return (
    <section className="bg-black text-white py-12 lg:pb-20">
      <Heading title={"What We Do"} className="text-yellow" />
      <Container className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between">
        {columns.map((col, colIndex) => {
          const underlineIndex = getUnderline(colIndex, col.items.length);

          return (
            <ListCard key={col.id} underlineIndex={underlineIndex} col={col} />
          );
        })}
      </Container>
    </section>
  );
};

export default WhatWeDo;
