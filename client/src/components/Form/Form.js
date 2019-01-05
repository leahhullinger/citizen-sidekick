import React from "react";
import styles from "./Form.module.css";

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

export const TextArea = ({ label, text, onInputChange }) => {
  return (
    <span className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <textarea className={styles.textarea} onChange={onInputChange}>
        {text}
      </textarea>
    </span>
  );
};

export const Select = ({ option }) => {
  return (
    <span className={styles.wrapper}>
      <select className={styles.select} placeholder="select folder" />
    </span>
  );
};
