import Container from "../common/Container";
import Title from "../title/Title";
import Flex from "../ui/Flex";
import TestimonialsItem from "./TestimonialsItem";

function Testimonials() {
  return (
    <section className="py-15">
      <Container>
        <Flex className="md:flex-row flex-col  md:gap-20 gap-6">
          <Title
            title="Testimonials"
            subtitle="What people say
About Us."
            className="text-left max-w-[409px] capitalize"
          />

          <div>
            <TestimonialsItem />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Testimonials;
