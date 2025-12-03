import Container from "../common/Container";
import NavList from "../ui/NavList";
import fbImg from "../../assets/image/footer/Social.png";
import insImg from "../../assets/image/footer/Social (1).png";
import twiImg from "../../assets/image/footer/Social (2).png";
import googleImg from "../../assets/image/footer/Google Play.png";
import playStoreImg from "../../assets/image/footer/Play Store.png";
import Image from "../ui/Image";

function Footer() {
  const fCompanyList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Careers",
    },
    {
      id: 3,
      name: "Mobile",
    },
  ];
  const fContactList = [
    {
      id: 1,
      name: "Help/FAQ",
    },
    {
      id: 2,
      name: "Press",
    },
    {
      id: 3,
      name: "Affilates",
    },
  ];
  const fMoreList = [
    {
      id: 1,
      name: "Airlinefees",
    },
    {
      id: 2,
      name: "Airline",
    },
    {
      id: 3,
      name: "Low fare tips",
    },
  ];

  return (
    <footer className="lg:py-25 py-10">
      <Container>
        <div className="flex lg:flex-row flex-col  gap-8">
          <div className="lg:w-3/12 w-full">
            <h2 className="font-Poppins text-[44px] font-medium text-textHeading">
              Jadoo.
            </h2>
            <p className="text-[13px] font-Poppins font-medium text-textColor leading-[125%] max-w-[207px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="lg:w-2/4 w-full flex justify-between">
            <div>
              <h3 className="text-[21px] font-Poppins font-bold text-black pb-5">
                Company
              </h3>

              <ul className="text-lg font-Poppins font-medium text-textColor">
                {fCompanyList.map((item) => (
                  <NavList
                    item={item}
                    key={item.id}
                    className="py-1 hover:text-btnColor duration-500 cursor-pointer"
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[21px] font-Poppins font-bold text-black pb-5">
                Contact
              </h3>

              <ul className="text-lg font-Poppins font-medium text-textColor">
                {fContactList.map((item) => (
                  <NavList
                    item={item}
                    key={item.id}
                    className="py-1  hover:text-btnColor duration-500 cursor-pointer"
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[21px] font-Poppins font-bold text-black pb-5">
                More
              </h3>

              <ul className="text-lg font-Poppins font-medium text-textColor">
                {fMoreList.map((item) => (
                  <NavList
                    item={item}
                    key={item.id}
                    className="py-1  hover:text-btnColor duration-500 cursor-pointer"
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-3/12 lg:ml-10">
            <div className="flex gap-6">
              <Image className="cursor-pointer" imgUrl={fbImg} alt="fb img" />
              <Image
                className="cursor-pointer"
                imgUrl={insImg}
                alt="instragrom img"
              />
              <Image
                className="cursor-pointer"
                imgUrl={twiImg}
                alt="twitter img"
              />
            </div>
            <h4 className="text-[20px] font-medium font-Poppins text-textColor pt-6 pb-4">
              Discover our app
            </h4>

            <div className="flex gap-2">
              <Image
                className="cursor-pointer"
                imgUrl={playStoreImg}
                alt="play store img"
              />
              <Image
                className="cursor-pointer"
                imgUrl={googleImg}
                alt="play store img"
              />
            </div>
          </div>
        </div>

        <p className="text-[14px] font-Poppins font-medium text-textColor text-center pt-8">
          All rights reserved@jadoo.co
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
