import Container from "../common/Container";
import Title from "../title/Title";
import Flex from "../ui/Flex";
import bookingImg from "../../assets/image/booking/Image.png";
import bookingPayment from "../../assets/image/booking/payment.png";
import bookingAirport from "../../assets/image/booking/airport.png";
import bookingDest from "../../assets/image/booking/destination.png";
import Image from "../ui/Image";
import BookingStep from "./BookingStep";

function Booking() {
  const bookingStep = [
    {
      id: 1,
      title: "Choose Destination",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, facere. ",
      imgUrl: bookingDest,
    },
    {
      id: 2,
      title: "Make Payment",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, facere. ",
      imgUrl: bookingPayment,
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, facere. ",
      imgUrl: bookingAirport,
    },
  ];

  return (
    <section>
      <Container>
        <Flex className="md:flex-row flex-col">
          <div className="md:w-2/4 w-full mt-9">
            <Title
              subtitle="Book your next trip 
in 3 easy steps"
              title="Easy and Fast"
              className="text-left max-w-[511px] flex flex-col gap-3"
            />

            <div className="pt-[31px]">
              {bookingStep.map((data) => (
                <BookingStep item={data} key={data.id} />
              ))}
            </div>
          </div>

          <div className="md:w-2/4 w-full  ">
            <Image imgUrl={bookingImg} alt="booking img" />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Booking;
