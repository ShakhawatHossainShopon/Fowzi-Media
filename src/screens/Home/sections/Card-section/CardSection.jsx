import Card from "@/components/Card/Card";
import card1 from "@/assets/banner-1.png";
const CardSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center">
          <div className="md:px-[10%]">
            <Card
              heading={"High-Quality Print Solutions"}
              paragraph={
                "From business cards to banners, Fowzi Prints delivers exceptional results tailored to your needs"
              }
              img={card1}
            />
            <div className="xl:flex xl:space-y-0 space-y-6 py-6 gap-6">
              <Card
                heading={"High-Quality Print Solutions"}
                paragraph={
                  "From business cards to banners, Fowzi Prints delivers exceptional results tailored to your needs"
                }
                img={card1}
                isCard={true}
              />
              <Card
                heading={"High-Quality Print Solutions"}
                paragraph={
                  "From business cards to banners, Fowzi Prints delivers exceptional results tailored to your needs"
                }
                img={card1}
                isCard={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
