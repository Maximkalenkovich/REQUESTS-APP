import React from 'react';
import styles from './styles.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: { message?: string };
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`${styles.textareaGroup} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea className={styles.textarea} {...props} />
      {error?.message && (
        <span className={styles.error}>{error.message}</span>
      )}
    </div>
  );
};