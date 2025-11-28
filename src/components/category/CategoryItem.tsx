import Image from "../ui/Image"
import weatherImg from "../../assets/image/catagory (4).png"

function CategoryItem() {
  return (
    <div className="text-center w-3/12">



<Image imgUrl={weatherImg} alt="img" className="mx-auto"/>
<h4 className="text-[20px] font-Sans font-semibold text-textHeading pt-[29px] pb-[15px]">Calculated Weather </h4>
<p className="text-[16px] font-Poppins text-textColor leading-[26px] max-w-[181px] mx-auto">Built Wicket longer admire do barton vanity itself do in it.</p>


    </div>
  )
}

export default CategoryItem