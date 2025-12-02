import MikeImg from "../../assets/image/testimonial/Image.png";
import Image from "../ui/Image";
function TestimonialsItem() {
  return (
    <div className="relative">
      <div>
        <Image imgUrl={MikeImg} alt="img" className="absolute md:-left-8 top-0" />
      </div>

      <div className="p-9 shadow-testimonial">
        <p className="font-Poppins  text-textColor font-medium text-[16px] leading-8 max-w-[402px] pt-9">
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <h3 className="font-Poppins text-lg text-textColor font-semibold pb-1 md:pt-8 pt-4">
          Mike taylor
        </h3>
        <h5 className="font-Poppins text-[14px] text-textColor font-medium ">
          Lahore, Pakistan
        </h5>
      </div>
    </div>
  );
}

export default TestimonialsItem;
