import React from "react";
import { Icon } from "mx-react-components";
import styles from "./Button.module.css";

export const SimpleButton = ({ children, btnText, onClick, isActive }) => {
  const classes = [styles.simpleBtn, isActive ? styles.isActive : null].join(
    " "
  );
  return (
    <button className={classes} onClick={onClick}>
      {btnText}
      {children}
    </button>
  );
};

export const Button = ({ children, btnText, onClick }) => {
  return (
    <button className={styles.btn_bold} onClick={onClick}>
      {btnText}
      {children}
    </button>
  );
};

export const IconButton = ({ type, size, btnText, onClick }) => (
  <button className={styles.iconBtn} onClick={onClick}>
    <Icon type={type} size={size} />
    {btnText}
  </button>
);
