import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../Button/Button";
import styles from "./NewFolderForm.module.css";

export const NewFolderForm = ({
  isOpen,
  handleClose,
  onClick,
  inputValue,
  handleInputUpdate
}) => {
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className={styles.heading}>+ NEW FOLDER</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <input
          className={styles.input}
          placeholder="FOLDER NAME"
          name="folderName"
          value={inputValue}
          onChange={handleInputUpdate}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onClick()}>Save ></Button>
      </Modal.Footer>
    </Modal>
  );
};
