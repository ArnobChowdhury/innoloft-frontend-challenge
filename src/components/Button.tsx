import { Loader } from "../icons";

interface ButtonProps {
  children: String;
  disabled?: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  disabled,
  icon,
  onClick,
  loading,
  variant = "primary",
}: ButtonProps) => {
  let classNames = "btn";
  if (variant === "primary") {
    classNames = `${classNames} btn_primary`;
  } else {
    classNames = `${classNames} btn_secondary`;
  }

  return (
    <button disabled={disabled} className={classNames} onClick={onClick}>
      {icon && !loading && <span className="mr-1.5">{icon}</span>}
      {loading && (
        <span className="mr-1.5 h-4 w-4">
          <Loader />
        </span>
      )}
      {children}
    </button>
  );
};
