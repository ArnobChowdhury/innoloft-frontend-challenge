import { Text, Chip } from "./";
import { EditOfferDetailsProps } from "../types";
import { useController, UseControllerProps } from "react-hook-form";
import { useRef, useEffect, useState, MouseEvent, KeyboardEvent } from "react";

interface MultipleTextInputProps extends UseControllerProps<EditOfferDetailsProps> {
  id?: string;
  label: string;
  defaultChips?: EditOfferDetailsProps["businessModels"];
}

export const MultipleChipsInput = (props: MultipleTextInputProps) => {
  const { id, label, name, defaultChips } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [chips, setChips] = useState<{ id?: number; name: string }[]>(defaultChips || []);
  const editableDivRef = useRef<HTMLDivElement>(null);

  const { field } = useController(props);
  const { onChange, onBlur } = field;

  useEffect(() => {
    if (chips.length > 0 && inputRef.current) {
      const val = chips.map((chip) => chip.name).join(",");
      inputRef.current.value = val;
    }
  }, [chips]);

  const performChipRemove = (removedChip: string) => {
    setChips((prev) => prev.filter((chip) => chip.name !== removedChip));
  };

  useEffect(() => {
    onChange(chips);
  }, [chips, onChange]);

  const handleChipAdd = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | KeyboardEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();
    const div = editableDivRef.current;
    if (div) {
      const val = div.textContent as string;
      setChips((prev) => [
        ...prev,
        {
          name: val,
        },
      ]);
      div.textContent = "";
    }
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    handleChipAdd(e);
  };

  return (
    <div>
      <Text text={label} />
      <input type='hidden' ref={inputRef} name={name} id={id} />
      <div className='relative'>
        <div
          contentEditable={true}
          className='px-2.5 py-1.5 border border-color-gray-light rounded-md'
          ref={editableDivRef}
          onKeyDown={handleEnterKeyDown}
          onBlur={onBlur}
        ></div>
        <button
          className='top-2/4 right-0 absolute -translate-y-1/2 rounded-r-md border border-color-gray-light h-full px-lg'
          onClick={handleChipAdd}
        >
          Add
        </button>
      </div>
      <div className='-ml-1 -mb-1 mt-1'>
        {chips.map((chip) => {
          const { name } = chip;
          return (
            <Chip
              key={`${Math.floor(Math.random() * 1000)}-${name}`} // just a hack to create a key
              text={name}
              tailwindClasses='ml-1 mb-1'
              withCloseIcon
              onCloseClick={performChipRemove}
            />
          );
        })}
      </div>
    </div>
  );
};
