import Container from "../common/Container";
import Title from "../title/Title";
import CategoryItem from "./CategoryItem";

function Category() {
  const categoryItemList = [
    {
      id: 1,
      name: "",
    },
  ];

  return (
    <section>
      <Container>
        <Title title="CATEGORY" subtitle="We Offer Best Services" />

        <div>
          <CategoryItem />
        </div>
      </Container>
    </section>
  );
}

export default Category;
