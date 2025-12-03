import Container from "../common/Container";
import Image from "../ui/Image";
import bannerImg from "../../assets/image/banner.png";
import brashImg from "../../assets/image/brash.png";
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import { FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="lg:pb-[113px] pt-20 lg:pt-20">
      <Container>
        <Flex className="md:flex-row flex-col">
          <div className="md:w-2/4 w-full lg:pt-[130px] relative ">
            <Image
              imgUrl={brashImg}
              alt="img"
              className="absolute lg:-top-[-255px] md:-top-[-230px] lg:left-[220px] md:left-[70px]  z-2 hidden md:block  "
            />

            <div className="lg:absolute w-full z-50 ">
              <h5 className="text-[20px] font-bold font-Poppins text-btnColor mb-6">
                Best Destinations around the world
              </h5>
              <h1 className="max-w-[545px] font-Volkhov text-secondary text-4xl md:text-[55px] lg:text-[84px] lg:leading-[89px] lg:tracking-[-7px] mb-2 lg:mb-[30px] ">
                Travel, enjoy and live a new and full life
              </h1>
              <p className="max-w-[477px] leading-[30px] text-[14px] md:text-[16px] font-medium font-Poppins text-textColor mb-4 lg:mb-[34px]">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex lg:gap-11 gap-7 items-center justify-center lg:justify-start ">
                <Button
                  title="Find out more"
                  className="md:text-[18px] text-[14px] font-Sans font-medium rounded-[10px] bg-yelloColor text-white lg:px-[27px] md:px-5 px-3 py-1 lg:py-[18px] md:py-3"
                />
                <button className="flex items-center gap-1.5 lg:gap-5 text-[14px] md:text-[17px] font-Poppins text-textColor">
                  <FaPlayCircle className="text-btnColor text-3xl md:text-[45px] lg:text-[52px]" />
                  Play Demo
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-2/4 w-full pt-6 md:pt-10 lg:pt-30 ">
            <Image
              imgUrl={bannerImg}
              alt="banner img"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;
