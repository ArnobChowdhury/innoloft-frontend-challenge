interface ItemDetailWithIconProps {
  icon: JSX.Element;
  items: JSX.Element;
  tailWindClasses?: string;
}

export const ItemDetailWithIcon = ({ icon, items, tailWindClasses }: ItemDetailWithIconProps) => {
  const classNames = `flex ${tailWindClasses}`;
  return (
    <div className={classNames}>
      <div className='mr-2'>{icon}</div>
      <div className='grow'>{items}</div>
    </div>
  );
};
