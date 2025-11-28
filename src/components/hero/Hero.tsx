import Container from "../common/Container";
import Image from "../ui/Image";
import bannerImg from "../../assets/image/banner.png";
import brashImg from "../../assets/image/brash.png"
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import { FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <section className="pb-[113px]">
      <Container>
        <Flex>
          <div className="w-2/4 pt-[130px] relative ">
<Image imgUrl={brashImg} alt="img" className="absolute -top-[-255px] left-[220px] z-2 "/>

            <div className="absolute w-full z-50">


            <h5 className="text-[20px] font-bold font-Poppins text-btnColor mb-6">
              Best Destinations around the world
            </h5>
            <h1 className="max-w-[545px] font-Volkhov text-secondary text-[84px] leading-[89px] tracking-[-7px] mb-[30px] ">
              Travel, enjoy and live a new and full life
            </h1>
            <p className="max-w-[477px] leading-[30px] text-[16px] font-medium font-Poppins text-textColor mb-[34px]">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex gap-11 items-center ">
              <Button
                title="Find out more"
                className="text-[18px] font-Sans font-medium rounded-[10px] bg-yelloColor text-white px-[27px] py-[18px]"
              />
              <button className="flex items-center gap-5 text-[17px] font-Poppins text-textColor">
                <FaPlayCircle className="text-btnColor text-[52px]"/>
                Play Demo
              </button>
            </div>
            </div>
            
          </div>
          <div className="w-2/4">
            <Image imgUrl={bannerImg} alt="banner img" />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;
