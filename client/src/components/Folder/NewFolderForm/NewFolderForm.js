import React from "react";
import { Button } from "../../Button/Button";
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
          <Button onClick={() => onClick()}>Save ></Button>
        </div>
      </div>
      <div className={styles.column} />
    </div>
  );
};
