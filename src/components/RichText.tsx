import { forwardRef } from "react";
import ReactQuill from "react-quill";
import { EditProductInfoProps } from "../types";
import { qlFormats, qlModules } from "../constants";
import { useController, UseControllerProps } from "react-hook-form";

type RichTextProps = UseControllerProps<EditProductInfoProps> & {
  initialValue: string;
  resetQuill?: (element: ReactQuill) => void;
};

export const RichText = forwardRef<ReactQuill, RichTextProps>((props, ref) => {
  const { initialValue } = props;
  const { field } = useController(props);
  const { onChange } = field;

  return (
    <ReactQuill
      theme='snow'
      defaultValue={initialValue}
      onChange={onChange}
      formats={qlFormats}
      modules={qlModules}
      ref={ref}
    />
  );
});

RichText.displayName = "RichText";
