import React from "react";
import styles from "./TextArea.module.css";

export const TextArea = ({
  file,
  placeholder,
  value,
  name,
  label,
  onChange,
  disabled,
  text
}) => {
  return (
    <span className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {text}
      </textarea>
    </span>
  );
};
