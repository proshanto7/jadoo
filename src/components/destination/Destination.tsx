import Container from "../common/Container";
import Title from "../title/Title";
import Location from "./Location";
import romeImg from "../../assets/image/location/rome.jpg";
import londonImg from "../../assets/image/location/london.jpg";
import europeImg from "../../assets/image/location/europe.jpg";
import sideImg from "../../assets/image/location/Decore.png";
import Flex from "../ui/Flex";

function Destination() {
  const locationList = [
    {
      id: 1,
      name: "Rome italty",
      price: 5.24,
      durations: 10,
      imgUrl: romeImg,
    },
    {
      id: 2,
      name: "London, UK",
      price: 4.2,
      durations: 12,
      imgUrl: londonImg,
    },
    {
      id: 3,
      name: "Full Europe",
      price: 15,
      durations: 28,
      imgUrl: europeImg,
    },
  ];

  return (
    <section className="lg:pt-[400px] lg:pb-[600px] pb-10">
      <Container>
        <Title subtitle="Top Destinations" title="Top Selling" />

        <div className="relative">
          <Flex className="justify-center flex-col  lg:flex-row gap-[35px] pt-12 lg:absolute w-full z-50">
            {locationList.map((data) => (
              <Location item={data} key={data.id} />
            ))}
          </Flex>
          <img
            src={sideImg}
            alt="img"
            className=" hidden lg:block absolute top-[241px] right-8"
          />
        </div>
      </Container>
    </section>
  );
}

export default Destination;
