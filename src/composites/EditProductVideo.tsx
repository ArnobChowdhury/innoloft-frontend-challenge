import { Check } from "../icons";
import { Button } from "../components";
import { useForm } from "react-hook-form";
import { ProductVideoProps } from "../types";

type EditProductVideoProps = ProductVideoProps & {
  onSubmit: (data: ProductVideoProps) => void;
};

export const EditProductVideo = ({
  video,
  onSubmit,
}: EditProductVideoProps) => {
  const { register, handleSubmit } = useForm<ProductVideoProps>({
    defaultValues: { video },
  });

  return (
    <div className="col-span-3 p-lg border border-color-gray-light bg-white rounded-md space-y-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Video</h2>
        <div className="flex">
          <input
            type="url"
            className="grow mr-2.5"
            placeholder="Add a youtube or vimeo link"
            {...register("video")}
          />
          <Button icon={<Check />}>Save</Button>
        </div>
      </form>
    </div>
  );
};
