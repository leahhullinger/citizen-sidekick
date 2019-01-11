import React from "react";
import { Card } from "../../Card/Card";
import { Input } from "../../Form/Input/Input";
import { Button } from "../../Button/Button";
import styles from "./NewFolderForm.module.css";

export const NewFolderForm = ({ label, inputValue, handleInputUpdate }) => {
  return (
    <div>
      <Card>
        <input
          className={styles.input}
          label={label}
          name="folderName"
          value={inputValue}
          onChange={handleInputUpdate}
        />
      </Card>
    </div>
  );
};
