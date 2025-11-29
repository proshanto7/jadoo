import type { imgType } from "../types/imgType";

function Image({ imgUrl, alt, className }: imgType) {
  return <img src={imgUrl} alt={alt} className={className} />;
}

export default Image;
