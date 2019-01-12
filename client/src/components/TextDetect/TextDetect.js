import React, { Component } from "react";
import { Thumbnail, Modal } from "react-bootstrap";
import { Card } from "../Card/Card";
// import { Modal } from "mx-react-components";
import { Button } from "../Button/Button";
import { TextArea } from "../Form/TextArea/TextArea";
import { Loading } from "../Loading/Loading";
// this is the modal that pops up when tr
// need help connecting image to user_id
import styles from "./TextDetect.module.css";

export const TextDetect = ({
  onUpdateTranscription,
  file,
  isOpen,
  onClose
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} className={styles.container}>
      <Modal.Header closeButton>Image Transcription</Modal.Header>
      <Modal.Body className={styles.body}>
        <Thumbnail src={file.s3_url} className={styles.thumb} />
        {!!file.transcript && (
          <TextArea
            placeholder="Transription"
            value={file.transcript}
            name="transcription"
            onChange={e => {
              onUpdateTranscription(file.filename, {
                transcript: e.target.value
              });
            }}
            className={styles.text}
            disabled={!file.transcript}
          />
        )}
        {!file.transcript && <Loading />}
      </Modal.Body>
      <Modal.Footer>
        <Button
          simpleBtn={true}
          onClick={() => {
            onClose();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};