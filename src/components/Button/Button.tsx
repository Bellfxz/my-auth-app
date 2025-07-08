import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;