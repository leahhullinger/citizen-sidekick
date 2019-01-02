import React from "react";
import styles from "./Thumbnail.module.css";

export const Thumbnail = ({ src }) => {
  return <img className={styles.thumbnail} src={src} />;
};
