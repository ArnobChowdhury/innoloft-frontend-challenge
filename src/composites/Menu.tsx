import { Home, Members, Organizations, DownArrow } from "../icons";

const MenuItem = ({
  text,
  leftIcon,
  rightIcon,
}: {
  text: string;
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
}) => (
  <div className="flex justify-between mb-lg">
    <div className="flex text-color-gray-dark">
      <div className="flex items-center mr-2.5">{leftIcon}</div>
      {text}
    </div>
    <div className="flex items-center mr-6">{rightIcon}</div>
  </div>
);

export const Menu = () => {
  return (
    <div>
      <MenuItem leftIcon={<Home />} text="Home" />
      <MenuItem leftIcon={<Members />} text="Members" />
      <MenuItem
        leftIcon={<Organizations />}
        text="Organizations"
        rightIcon={<DownArrow />}
      />
    </div>
  );
};
