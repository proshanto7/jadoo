import Container from "../common/Container";
import Title from "../title/Title";
import CategoryItem from "./CategoryItem";
import WeatherImg from "../../assets/image/catagory (4).png";
import FrightImg from "../../assets/image/catagory (3).png";
import LocalImg from "../../assets/image/catagory (2).png";
import CustomizationImg from "../../assets/image/catagory (1).png";
import cardImgbg from "../../assets/image/star (1).png";
import cardImg from "../../assets/image/star (2).png";
import Flex from "../ui/Flex";
function Category() {
  const categoryList = [
    {
      id: 1,
      name: "Calculated Weather ",
      summary: "Built Wicket longer admire do barton vanity itself do in it.",
      imgUrl: WeatherImg,
    },

    {
      id: 2,
      name: "Best Flights",
      summary: "Engrossed listening. Park gate sell they west hard for the.",
      imgUrl: FrightImg,
    },
    {
      id: 3,
      name: "Local Events",
      summary:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      imgUrl: LocalImg,
    },
    {
      id: 4,
      name: "Customization",
      summary: "We deliver outsourced aviation services for military customers",
      imgUrl: CustomizationImg,
    },
  ];

  return (
    <section className="mt-5 md:mt-15 relative lg:pb-[123px] pb-10 ">
      <Container>
        <Title title="CATEGORY" subtitle="We Offer Best Services" />

        <div className="relative">
          <Flex className=" lg:absolute z-20 w-full md:justify-center  lg:justify-between md:flex-row flex-col mt-5 lg:mt-[60px]">
            {categoryList.map((item) => (
              <CategoryItem item={item} />
            ))}
          </Flex>
          <img
            src={cardImgbg}
            alt="img"
            className="hidden lg:block absolute -bottom-[440px] z-10 left-[280px]"
          />
        </div>
      </Container>
      <img src={cardImg} alt="img" className="absolute -top-4 right-10" />
    </section>
  );
}

export default Category;
