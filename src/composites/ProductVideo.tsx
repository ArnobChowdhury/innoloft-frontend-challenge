import ReactPlayer from "react-player";
import { ProductVideoProps } from "../types";

export const ProductVideo = ({ video }: ProductVideoProps) => {
  return (
    <div className="border-solid border-gray-light border rounded-md col-span-3 p-lg  bg-white">
      <h2 className="mb-lg">Video</h2>
      <div className="flex justify-center">
        <ReactPlayer url={video} controls={true} />
      </div>
    </div>
  );
};
