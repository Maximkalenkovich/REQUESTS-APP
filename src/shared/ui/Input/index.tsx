import React from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: { message?: string };
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} {...props} />
      {error?.message && (
        <span className={styles.error}>
          {t(error.message) || error.message}
        </span>
      )}
    </div>
  );
};
