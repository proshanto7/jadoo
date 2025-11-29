import type { ListItem } from "../types/listItem";

function CategoryItem({ item }: { item: ListItem }) {
  const { id, name, imgUrl, summary } = item;

  return (
    <div key={id} className="text-center ">
      <div className="w-[166px] h-[153px] flex items-center justify-center">

      <img src={imgUrl} alt={name}  />

      </div>

      <h4 className="text-[20px] font-Sans font-semibold text-textHeading pt-[29px] pb-[15px]">
        {name}{" "}
      </h4>
      <p className="text-[16px] font-Poppins text-textColor leading-[26px] max-w-[181px] mx-auto">
        {summary}
      </p>
    </div>
  );
}

export default CategoryItem;
