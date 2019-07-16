import React from "react";
import { Modal } from "react-bootstrap";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "../../ui/Dialog";
import { TextField } from "../../ui/TextFields";
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
    <Dialog
      open={isOpen}
      onClose={evt => console.log(evt)}
      className={styles.transcription}
    >
      <DialogTitle>
        <h2 className={styles.light}>cs</h2>
        <h2>/ transcribe</h2>
      </DialogTitle>
      <DialogContent className={styles.content}>
        <img className={styles.img} src={file.s3_url} />
        <TextField
          textarea
          outlined
          fullwidth
          label="Transcription"
          rows={8}
          maxLength={20}
          characterCount
          name="transcription"
          value={!!file.transcript && file.transcript}
          onChange={e => {
            onUpdateTranscription(file.filename, {
              transcript: e.target.value
            });
          }}
          className={styles.result}
        />
      </DialogContent>
    </Dialog>
  );
};
