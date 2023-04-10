import ReactPlayer from "react-player";
import { ProductProps } from "../types";

type ProductVideoProps = Pick<ProductProps, "video">;

export const ProductVideo = ({ video }: ProductVideoProps) => {
  return (
    <div className="border-solid border-gray-light border rounded-lg col-span-3 p-lg  bg-white">
      <h2 className="mb-lg">Video</h2>
      <div className="flex justify-center">
        <ReactPlayer url={video} controls={true} />
      </div>
    </div>
  );
};
