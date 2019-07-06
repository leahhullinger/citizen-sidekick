import React from "react";
import { PrimaryBtn } from "../../Button/PrimaryBtn";
import styles from "./NewFolderForm.module.css";

export const NewFolderForm = ({ onClick, inputValue, handleInputUpdate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>+ Add New Folder</h2>
        <input
          className={styles.input}
          placeholder="FOLDER NAME"
          name="folderName"
          value={inputValue}
          onChange={handleInputUpdate}
        />
        <div className={styles.btnWrapper}>
          <PrimaryBtn btnText="Save" onClick={() => onClick()} />
        </div>
      </div>
      <div className={styles.column} />
    </div>
  );
};
