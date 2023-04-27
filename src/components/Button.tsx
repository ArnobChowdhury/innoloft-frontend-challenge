import { MouseEvent } from "react";
import { ButtonHTMLAttributes } from "react";
import { Loader } from "../icons";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  icon?: JSX.Element;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  variant?: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button = ({
  children,
  disabled,
  icon,
  onClick,
  loading,
  variant = "primary",
  type,
}: ButtonProps) => {
  let classNames = "btn";
  if (variant === "primary") {
    classNames = `${classNames} btn_primary`;
  } else {
    classNames = `${classNames} btn_secondary`;
  }

  return (
    <button type={type} disabled={disabled} className={classNames} onClick={onClick}>
      {icon && !loading && <span className='mr-1.5'>{icon}</span>}
      {loading && (
        <span className='mr-1.5 h-4 w-4'>
          <Loader />
        </span>
      )}
      {children}
    </button>
  );
};
