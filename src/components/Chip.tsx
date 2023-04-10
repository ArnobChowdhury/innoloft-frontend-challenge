interface ChipProps {
  text: string;
  tailwindClasses?: string;
}

export const Chip = ({ text, tailwindClasses }: ChipProps) => {
  const classNames = `rounded-full px-3.5 py-1 inline-block bg-color-gray-light max-w-[350px] leading-4 text-center ${tailwindClasses}`;
  return <div className={classNames}>{text}</div>;
};
