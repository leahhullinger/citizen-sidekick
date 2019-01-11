import React from "react";
import styles from "./Select.module.css";

export const Select = ({ option }) => {
  return (
    <span className={styles.wrapper}>
      <select className={styles.select} placeholder="select folder" />
    </span>
  );
};
