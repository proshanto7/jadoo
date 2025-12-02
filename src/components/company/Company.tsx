import Container from "../common/Container";
import axonImg from "../../assets/image/company/com (5).png";
import jetstarImg from "../../assets/image/company/com (4).png";
import expediaImg from "../../assets/image/company/com (3).png";
import qantasImg from "../../assets/image/company/com (2).png";
import alitaliaImg from "../../assets/image/company/com (1).png";
import Image from "../ui/Image";
import type { CompanyType } from "../types/companyType";

function Company() {
  const companyList: CompanyType[] = [
    {
      id: 1,
      name: "axon",
      imgUrl: axonImg,
    },

    {
      id: 2,
      name: "jetstar",
      imgUrl: jetstarImg,
    },
    {
      id: 3,
      name: "qantas",
      imgUrl: qantasImg,
    },
    {
      id: 4,
      name: "expedia",
      imgUrl: expediaImg,
    },
    {
      id: 5,
      name: "alitalia",
      imgUrl: alitaliaImg,
    },
  ];

  return (
    <section>
      <Container>
        <ul className="grid grid-cols-5 items-center justify-center cursor-pointer ">
          {companyList.map((data) => (
            <li key={data.id}>
              <Image imgUrl={data.imgUrl} alt={data.name} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Company;
