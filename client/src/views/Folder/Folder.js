import React from "react";
import styles from "./Folder.module.css";

export const Folder = ({ children }) => (
  <div className={styles.folderWrapper}>{children}</div>
);
