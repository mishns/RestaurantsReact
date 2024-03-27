import { default as React, FC } from "react";
import styles from "./button.css";
import { Loader } from "@ui/Loader";

interface ButtonProps {
  kind?: "primary" | "outline";
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  kind = "primary",
  type,
  isLoading,
  isDisabled = isLoading,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      data-kind={kind}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
