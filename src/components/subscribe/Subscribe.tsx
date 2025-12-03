import Container from "../common/Container";
import Button from "../ui/Button";
import { HiOutlineMail } from "react-icons/hi";
import ringImg from "../../assets/image/subscribe/ring (1).png";
import ringImgs from "../../assets/image/subscribe/ring (2).png";
import msgImg from "../../assets/image/subscribe/msg.png";

function Subscribe() {
  return (
    <section>
      <Container>
        <div className="relative bg-[#DFD7F9] text-center py-10 md:py-20 rounded-b-[20px] rounded-tl-[70px] md:rounded-tl-[129px] rounded-tr-[20px]">
          <h2 className="max-w-[881px] mx-auto md:text-[33px] text-2xl font-Poppins font-semibold md:leading-[54px] text-textColor">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <div className="relative md:py-[74px] py-4">
            <div className="md:absolute w-full flex items-center md:flex-row flex-col md:justify-center gap-6  z-200">
              <div className="relative">
                <input
                  type="email"
                  className="bg-white md:py-6 py-3 md:px-13 px-4 sm:w-[421px] rounded-[10px]"
                  placeholder={` Your Email`}
                />
                <HiOutlineMail className="absolute top-2/4 -translate-y-2/4 left-8 text-textColor md:block hidden " />
              </div>
              <div>
                <Button
                  title="Subscribe"
                  className="text-white text-[17px] font-Poppins font-semibold bg-btnColor md:py-[22px] py-2.5 px-4 md:px-[55px] rounded-[10px] "
                />
              </div>
            </div>
          </div>
          <img src={ringImg} alt="img" className="hidden md:block absolute top-0 right-0" />
          <img
            src={ringImgs}
            alt="img"
            className="hidden md:block absolute bottom-0 -left-25"
          />
          <img src={msgImg} alt="img" className="hidden md:block absolute -top-3 -right-3" />
        </div>
      </Container>
    </section>
  );
}

export default Subscribe;
