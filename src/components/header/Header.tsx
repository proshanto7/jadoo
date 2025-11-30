import Container from "../common/Container";
import Image from "../ui/Image";
import NavList from "../ui/NavList";
import LogoImg from "../../assets/image/Logo.png";
import Flex from "../ui/Flex";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";

function Header() {
  const listItem = [
    {
      id: 1,
      name: "Destinations",
    },
    {
      id: 2,
      name: "Hotels",
    },
    {
      id: 3,
      name: "Flights",
    },
    {
      id: 4,
      name: "Bookings",
    },
    {
      id: 5,
      name: "Login",
    },
  ];

  const [mobileBtn, setMobileBtn] = useState<boolean>(false);

  const handleMobileBtn = () => {
    setMobileBtn(!mobileBtn);
  };

  return (
    <header>
      <nav className=" relative">
        <Container>
          <div className="relative">
            <Flex className="bg-white absolute top-0 left-0 w-full z-999 items-center justify-between py-3">
              <Image
                imgUrl={LogoImg}
                alt="logo img"
                className="cursor-pointer"
              />

              <div className="flex lg:gap-[55px] gap-2  items-center">
                <ul className="hidden lg:flex gap-[55px]">
                  {listItem.map((item) => (
                    <NavList
                      key={item.id}
                      item={item}
                      className="font-Sans text-listColor font-medium text-[17px] cursor-pointer  hover:text-[#fda132] duration-400"
                    />
                  ))}
                </ul>

                <Button
                  title="Sing up"
                  className="border hover:bg-[#fda132] duration-500 border-listColor font-Sans text-listColor font-medium lg:text-[17px] text-[14px] px-4 lg:px-[22px] lg:py-[9px] py-1 rounded-[5px]"
                />

                <div className="lg:hidden flex items-center">
                  {mobileBtn ? (
                    <button onClick={handleMobileBtn}>
                      <ImCancelCircle className="text-2xl " />
                    </button>
                  ) : (
                    <button onClick={handleMobileBtn}>
                      <GiHamburgerMenu className="text-2xl " />
                    </button>
                  )}
                </div>
              </div>
            </Flex>
          </div>

          {mobileBtn ? (
            <ul className="bg-[#fda132] rounded-2xl text-center lg:hidden block p-2.5 translate-y-[60px] duration-1000">
              {listItem.map((item) => (
                <NavList
                  key={item.id}
                  item={item}
                  className="font-Sans text-listColor font-medium text-[17px] cursor-pointer py-1.5 hover:text-white duration-400"
                />
              ))}
            </ul>
          ) : (
            <ul className=" bg-[#fda132] lg:hidden block p-2.5 text-center -translate-y-[280px] duration-1000">
              {listItem.map((item) => (
                <NavList
                  key={item.id}
                  item={item}
                  className="font-Sans text-listColor font-medium text-[17px] cursor-pointer py-1.5 "
                />
              ))}
            </ul>
          )}
        </Container>
      </nav>
    </header>
  );
}

export default Header;
