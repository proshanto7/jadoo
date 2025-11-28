import Container from "../common/Container";
import Title from "../title/Title";
import CategoryItem from "./CategoryItem";

function Category() {


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
