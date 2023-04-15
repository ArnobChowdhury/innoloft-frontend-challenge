import {
  forwardRef,
  useRef,
  useEffect,
  useState,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { Text, Chip } from "./";

interface MultipleTextInputProps {
  value: string;
  name?: string;
  id?: string;
  label: string;
  onValueChange: (val: string) => void;
}

export const MultipleChipsInput = forwardRef<
  HTMLInputElement,
  MultipleTextInputProps
>(({ value, onValueChange, name, id, label }, ref) => {
  const [chips, setChips] = useState<string[]>([]);
  const editableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setChips(value.split(","));
    }
  }, []);

  const performChipAdd = (div: HTMLDivElement) => {
    const val = div.textContent;
    if (val) {
      setChips((prev) => [...prev, val]);
      div.textContent = "";
    }
  };

  useEffect(() => {
    onValueChange(chips.join(","));
  }, [chips]);

  const performChipRemove = (removedChip: string) => {
    setChips((prev) => prev.filter((chip) => chip !== removedChip));
  };

  const handleChipAdd = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const div = editableDivRef.current;
    if (div) performChipAdd(div);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const div = editableDivRef.current;
    if (div) performChipAdd(div);
  };

  return (
    <div>
      <Text text={label} />
      <input type="hidden" value={value} ref={ref} name={name} id={id} />
      <div className="relative">
        <div
          contentEditable={true}
          className="px-2.5 py-1.5 border border-color-gray-light rounded-md"
          ref={editableDivRef}
          onKeyDown={handleEnterKeyDown}
        ></div>
        <button
          className="top-2/4 right-0 absolute -translate-y-1/2 rounded-r-md border border-color-gray-light h-full px-lg"
          onClick={handleChipAdd}
        >
          Add
        </button>
      </div>
      <div className="-ml-1 -mb-1 mt-1">
        {chips.map((chipName) => {
          return (
            <Chip
              key={chipName}
              text={chipName}
              tailwindClasses="ml-1 mb-1"
              withCloseIcon
              onCloseClick={performChipRemove}
            />
          );
        })}
      </div>
    </div>
  );
});