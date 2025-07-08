import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, error, type = "text" }) => {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.input} ${error ? styles.error : ""}`}
        required
      />
      <label className={`${styles.label} ${value ? styles.active : ""}`}>
        {label}
      </label>
    </div>
  );
};

export default Input;