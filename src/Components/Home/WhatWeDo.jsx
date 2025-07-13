import columns from "../../data/columnsData";
import Container from "../reusable/Container";
import Heading from "../reusable/Heading";

const WhatWeDo = () => {
  return (
    <section className="bg-black text-white py-12">
      <Heading title={"What We Do"} className="text-yellow-600" />
      <Container
        className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between 
      max-w-[1400px] mx-auto"
      >
        {columns?.map((col) => (
          <div
            className="w-1/2 mx-auto 
          md:w-full md:pr-10 lg:pr-16 xl:pr-28"
            key={col.id}
            id={`col-${col.id}`}
          >
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-6 text-[#8A784E] ">
              {col.title}
            </h3>
            <ul className="space-y-2 text-sm lg:text-base xl:text-lg opacity-60">
              {col.items.map((item) => (
                <li
                  className="hover:underline hover:underline-offset-4 cursor-pointer"
                  key={item.id}
                  id={`item-${item.id}`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default WhatWeDo;
