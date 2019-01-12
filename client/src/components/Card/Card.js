import React from "react";
import styles from "./Card.module.css";
import { IconButton } from "../Button/Button";

export const Card = ({ children, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topNav}>
        <IconButton type="close-box" size="30" onClick={onClick} />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
