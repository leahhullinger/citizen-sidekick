import React from "react";
import { Icon } from "mx-react-components";
import styles from "./Button.module.css";

export const SimpleButton = ({ btnText, onClick }) => (
  <button className={styles.simpleBtn} onClick={onClick}>
    {btnText}
  </button>
);

export const Button = ({ btnStyle, btnText, onClick }) => {
  return (
    <button className={styles.btn_bold} onClick={onClick}>
      {btnText}
    </button>
  );
};

export const IconButton = ({ icon, btnText, onClick }) => (
  <button className={styles.iconBtn} onClick={onClick}>
    <Icon type={icon} />
    {btnText}
  </button>
);
