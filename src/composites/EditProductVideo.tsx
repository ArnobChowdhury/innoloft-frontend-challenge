import { Button } from "../components";
import { Check } from "../icons";
import { ProductProps } from "../types";

export const EditProductVideo = ({ video }: Pick<ProductProps, "video">) => {
  return (
    <div className="col-span-3 p-lg border border-color-gray-light bg-white rounded-md space-y-lg">
      <h2>Video</h2>
      <div className="flex">
        <input
          type="url"
          className="grow mr-2.5"
          placeholder="Add a youtube or vimeo link"
          value={video}
        />
        <Button icon={<Check />}>Save</Button>
      </div>
    </div>
  );
};
