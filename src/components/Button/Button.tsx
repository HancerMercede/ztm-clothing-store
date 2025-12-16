import type { ReactNode } from "react";
import "./Button.styles.scss";

interface ButtonProps {
  children: ReactNode;
  buttonType: string;
  [x: string]: unknown;
}

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
