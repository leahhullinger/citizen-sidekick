import React from "react";
import { Modal } from "react-bootstrap";
import { Card } from "../Card/Card";
// import { Modal } from "mx-react-components";
// import { Button, SimpleButton } from "../Button/Button";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { TextArea } from "../Form/TextArea/TextArea";
import { Loading } from "../Loading/Loading";

// this is the modal that pops up when tr
import styles from "./TextDetect.module.css";

export const TextDetect = ({
  onUpdateTranscription,
  file,
  isOpen,
  onClose
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.light}>cs</h2>
        <h2>/ transcribe</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={file.s3_url} />
        </div>
        {!!file.transcript && (
          <TextArea
            className={styles.textResults}
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
      </div>
      <div className={styles.footer}>
        {/* <Button
          onClick={() => {
            onClose();
          }}
        >
          Save
        </Button> */}
      </div>
    </Modal>
  );
};
