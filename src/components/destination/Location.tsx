import Image from "../ui/Image";
import { BiSolidNavigation } from "react-icons/bi";
import type { LocationType } from "../types/locationType";

function Location({ item }: { item: LocationType }) {
  const { id, name, durations, imgUrl, price } = item;

  return (
    <div className="group max-w-[314px] rounded-3xl cursor-pointer" key={id}>
      <div className="h-[330px] w-full rounded-t-3xl overflow-hidden ">
        <Image imgUrl={imgUrl} alt="rome img" className="group-hover:scale-105 duration-500" />
      </div>
      <div className="px-[25px] pt-[27px] shadow-boxShadow rounded-b-3xl bg-white">
        <div className="font-Poppins text-lg text-textColor flex justify-between ">
          <h5>{name}</h5>
          <h5>${price}k</h5>
        </div>
        <div className="font-Poppins text-lg text-textColor flex  gap-2 items-center mt-[19px] pb-[42px]">
          <BiSolidNavigation className="text-black" />
          <span>{durations} Days Trip</span>
        </div>
      </div>
    </div>
  );
}

export default Location;
