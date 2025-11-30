import type { ListItem } from "../types/listItem";

function CategoryItem({ item }: { item: ListItem }) {
  const { id, name, imgUrl, summary } = item;

  return (
    <div key={id} className="text-center lg:bg-transparent bg-gray-200 lg:m-0  m-2 rounded-2xl">
      <div className="w-[166px] h-[153px] flex items-center justify-center mx-auto">

      <img src={imgUrl} alt={name}   className=""/>

      </div>

      <h4 className="text-[20px] font-Sans font-semibold text-textHeading lg:pt-[29px] pb-2 lg:pb-[15px]">
        {name}{" "}
      </h4>
      <p className="text-[16px] font-Poppins text-textColor leading-[26px] max-w-[181px] pb-4 lg:mb-0 mx-auto">
        {summary}
      </p>
    </div>
  );
}

export default CategoryItem;
