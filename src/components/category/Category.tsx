import Container from "../common/Container";
import Title from "../title/Title";
import CategoryItem from "./CategoryItem";
import WeatherImg from "../../assets/image/catagory (4).png";
import FrightImg from "../../assets/image/catagory (3).png";
import LocalImg from "../../assets/image/catagory (2).png";
import CustomizationImg from "../../assets/image/catagory (1).png";
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
    <section>
      <Container>
        <Title title="CATEGORY" subtitle="We Offer Best Services" />

        <div>
          <Flex className=" justify-between  mt-[60px]">
            {categoryList.map((item) => (
              <CategoryItem item={item} />
            ))}
          </Flex>
        </div>
      </Container>
    </section>
  );
}

export default Category;
