import Container from "../common/Container";
import Image from "../ui/Image";
import NavList from "../ui/NavList";
import LogoImg from "../../assets/image/Logo.png";
import Flex from "../ui/Flex";
import Button from "../ui/Button";

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

  return (
    <header className="pt-[47px]">
      <nav>
        <Container>
          <Flex className="items-center justify-between">
            <Image imgUrl={LogoImg} alt="logo img" />

            <div className="flex gap-[55px] items-center">
              <ul className="flex gap-[55px]">
                {listItem.map((item) => (
                  <NavList
                    key={item.id}
                    item={item}
                    className="font-Sans text-listColor font-medium text-[17px] cursor-pointer "
                  />
                ))}
              </ul>

              <Button
                title="Sing up"
                className="border border-listColor font-Sans text-listColor font-medium text-[17px] px-[22px] py-[9px] rounded-[5px]"
              />
            </div>
          </Flex>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
