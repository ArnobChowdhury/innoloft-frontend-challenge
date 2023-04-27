import { MouseEvent } from "react";
import { Close } from "../icons";
interface ChipProps {
  text: string;
  tailwindClasses?: string;
  withCloseIcon?: boolean;
  onCloseClick?: (text: string) => void;
}

export const Chip = ({ text, tailwindClasses, withCloseIcon, onCloseClick }: ChipProps) => {
  const classNames = `rounded-full inline-flex items-center justify-between px-3.5 py-1 inline-block bg-color-gray-light max-w-[350px] leading-4 text-center ${tailwindClasses}`;

  const handleClockClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!onCloseClick) return;
    e.preventDefault();
    onCloseClick(text);
  };

  return (
    <div className={classNames}>
      {text}
      {withCloseIcon && (
        <div
          className='h-3.5 w-3.5 min-w-4 p-0.5 rounded-full bg-white ml-2 border border-color-gray-default cursor-pointer'
          onClick={handleClockClick}
        >
          <Close width='100%' height='100%' />
        </div>
      )}
    </div>
  );
};
