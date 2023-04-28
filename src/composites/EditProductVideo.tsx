import { Check } from "../icons";
import { Button } from "../components";
import { useForm } from "react-hook-form";
import { ProductVideoProps } from "../types";

type EditProductVideoProps = ProductVideoProps & {
  isSubmitting: boolean;
  onSubmit: (data: ProductVideoProps) => void;
};

export const EditProductVideo = ({ video, onSubmit, isSubmitting }: EditProductVideoProps) => {
  const { register, handleSubmit } = useForm<ProductVideoProps>({
    defaultValues: { video },
  });

  return (
    <div className='p-lg border border-color-gray-light bg-white rounded-md space-y-lg'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Video</h2>
        <div className='flex'>
          <input
            type='url'
            className='grow mr-2.5'
            placeholder='Add a youtube or vimeo link'
            {...register("video")}
            disabled={isSubmitting}
          />
          <Button loading={isSubmitting} icon={<Check />}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
