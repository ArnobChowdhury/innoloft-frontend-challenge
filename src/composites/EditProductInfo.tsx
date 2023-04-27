import { Button, RichText } from "../components";
import { Check } from "../icons";
import { OfferedBy } from "./";
import { EditProductInfoProps, ProductInfoProps } from "../types";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import ReactQuill from "react-quill";

export const EditProductInfo = ({
  picture,
  company,
  user,
  description,
  name,
  isSubmitting,
  onSubmit,
}: ProductInfoProps & {
  isSubmitting: boolean;
  onSubmit: (data: EditProductInfoProps) => void;
}) => {
  const { register, handleSubmit, control, reset } =
    useForm<EditProductInfoProps>({
      defaultValues: { description, name },
    });

  const quirllRef = useRef<ReactQuill>(null);

  return (
    <div className="grid grid-cols-3 col-span-3 bg-white border border-color-gray-light rounded-md">
      <div className="col-span-2">
        <div className="h-[300px] flex justify-center">
          <img src={picture} className="h-full" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-lg space-y-2.5">
            <input
              type="text"
              className="w-full font-semibold text-base text-color-gray-dark"
              {...register("name")}
              disabled={isSubmitting}
            />
            <div>
              <RichText
                control={control}
                name="description"
                initialValue={description}
                ref={quirllRef}
              />
            </div>
            <div className="flex justify-end space-x-2.5">
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  if (quirllRef.current) {
                    const editor = quirllRef.current.editor;
                    if (editor) {
                      quirllRef.current.setEditorContents(editor, description);
                    }
                  }
                  reset({ description, name });
                }}
              >
                Cancel
              </Button>
              <Button loading={isSubmitting} type="submit" icon={<Check />}>
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
      <OfferedBy company={company} user={user} />
    </div>
  );
};
