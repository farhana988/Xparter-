import epicDesignData from "../../data/epicDesignData";
import EpicDesignCard from "../cards/EpicDesignCard";
import Container from "../reusable/Container";
import Heading from "../reusable/Heading";

const EpicDesign = () => {
  return (
    <>
      <Heading
        title="Epic design and engineering"
        subtitle="Bridging creativity and technology to craft purposeful, high-performance digital experiences that are as visually striking as they are functionally powerful."
      />
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 xl:gap-16 py-8">
          {epicDesignData.map((card) => {
            const cardBg = card.cardBg || "bg-transparent";
            const circleBg = card.circleBg || "bg-white";

            return (
              <EpicDesignCard
                key={card.id}
                cardBg={cardBg}
                circleBg={circleBg}
                card={card}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default EpicDesign;
