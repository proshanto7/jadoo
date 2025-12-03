import type { BookingType } from "../types/bookingType";
import Image from "../ui/Image";

function BookingStep({ item }: { item: BookingType , onClick ?: () => void }) {
  const { id, title, imgUrl, description } = item;

  return (
    <div
      className="group flex gap-6 py-6 px-3 rounded-3xl mb-2 hover:shadow-boxShadow duration-500 cursor-pointer"
      key={id}
      onClick={()=>(alert(`You clicked on step ${id}`))}
    >
      <div>
        <Image imgUrl={imgUrl} alt="img" className="w-full" />
      </div>
      <div>
        <h3 className="font-Poppins text-[16px] text-textColor font-bold group-hover:text-btnColor duration-500">
          {title}
        </h3>
        <p className="font-Poppins text-[16px] max-w-[327px] text-textColor leading-[124%] ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BookingStep;
