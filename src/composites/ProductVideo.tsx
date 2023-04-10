import ReactPlayer from "react-player";
import { ProductProps } from "../types";

type ProductVideoProps = Pick<ProductProps, "video">;

export const ProductVideo = ({ video }: ProductVideoProps) => {
  return (
    <div className="border-solid border-gray-light border rounded-lg col-span-3 p-10 flex justify-center bg-white">
      <ReactPlayer url={video} controls={true} />
    </div>
  );
};
