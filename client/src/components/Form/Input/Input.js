import React from "react";
import styles from "./Input.module.css";

export const Input = ({ placeholder, label, onInputChange, input }) => {
  return (
    <span className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={placeholder}
        className={styles.input}
        onChange={onInputChange}
      />
    </span>
  );
};
