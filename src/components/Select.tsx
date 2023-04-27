import { forwardRef, useState, MouseEvent, useEffect } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { DownArrow } from "../icons";
import { getScrollbarWidth } from "../utils";
import { EditOfferDetailsProps, TRLProps } from "../types";

interface SelectProps extends UseControllerProps<EditOfferDetailsProps> {
  options: TRLProps[];
  value: TRLProps;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>((props: SelectProps, ref) => {
  const { options, value, name } = props;
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  const { field } = useController(props);
  const { onChange } = field;

  const [selected, setSelected] = useState(value);

  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownOpacity, setDropDownOpacity] = useState("opacity-0");

  const toggleDropDown = (_e: MouseEvent<HTMLDivElement>) => {
    setShowDropDown(!showDropDown);
  };

  const handleSelection = (e: MouseEvent<HTMLDivElement>, option: TRLProps) => {
    setSelected(option);
    toggleDropDown(e);
  };

  useEffect(() => {
    if (selected) {
      onChange(selected);
    }
  }, [selected, onChange]);

  useEffect(() => {
    const closeDropdownOnClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target;

      const popperElementDoesNotContainTarget = !popperElement?.contains(target as Node);

      const referenceElementDoesNotContainTarget = !referenceElement?.contains(target as Node);

      if (
        referenceElementDoesNotContainTarget &&
        popperElementDoesNotContainTarget &&
        showDropDown
      ) {
        setShowDropDown(false);
      }
    };

    document.body.addEventListener("click", closeDropdownOnClickOutside);

    return () => document.body.removeEventListener("click", closeDropdownOnClickOutside);
  }, [popperElement, referenceElement, showDropDown]);

  useEffect(() => {
    const hideDocumentBodyScroll = () => {
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      setDropDownOpacity("opacity-100");
    };

    const showDocumentBodyScroll = () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0";
      setDropDownOpacity("opacity-0");
    };

    if (showDropDown) {
      hideDocumentBodyScroll();
    } else {
      showDocumentBodyScroll();
    }

    return showDocumentBodyScroll;
  }, [showDropDown]);

  return (
    <div ref={setReferenceElement} className='relative'>
      <input name={name} type='hidden' value={value.name} ref={ref} />
      <div onClick={toggleDropDown} className='input_field cursor-pointer pr-8'>
        {selected?.name || <span className='opacity-70'>Select one</span>}
      </div>
      <div
        className='absolute top-2/4 right-2.5 -translate-y-2/4 cursor-pointer'
        onClick={toggleDropDown}
      >
        <DownArrow />
      </div>
      {showDropDown &&
        createPortal(
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className='max-w-[480px]'
            id='dropdown'
          >
            <div
              className={`custom_shadow bg-white rounded-md max-h-[400px] overflow-y-scroll custom_appearance ${dropDownOpacity}`}
            >
              {options.map((option) => {
                let classNames = "py-lg hover:bg-color-gray-light px-6 cursor-pointer border";
                if (Number(option.id) === Number(selected.id)) {
                  classNames = `${classNames} bg-gray-100 border-color-gray-light`;
                } else {
                  classNames = `${classNames} border-transparent`;
                }

                return (
                  <div
                    className={classNames}
                    key={option.id}
                    onClick={(e) => handleSelection(e, option)}
                  >
                    {option.name}
                  </div>
                );
              })}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
});
Select.displayName = "Select";
