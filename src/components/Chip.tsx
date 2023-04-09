interface ChipProps {
  text: String;
}

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className="rounded-full px-4 py-2 text-xs inline-block bg-color-gray-light">
      {text}
    </div>
  );
};
