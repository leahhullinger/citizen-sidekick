import React from "react";
import styles from "./Thumbnail.module.css";

export const Thumbnail = ({ src }) => {
  return (
    <div className={styles.thumbWrapper}>
      <img className={styles.thumbnail} src={src} />
    </div>
  );
};
