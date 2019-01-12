import React, { Component } from "react";
import { Thumbnail } from "../../Thumbnail/Thumbnail";
import styles from "./DisplayCard.module.css";

export const DisplayCard = ({ file }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Thumbnail
          src={
            "https://s3.us-east-2.amazonaws.com/citizen-sidekick/example.jpg"
          }
        />
        <div className={styles.summary}>
          <h3>{file.title}</h3>
          <p>{file.date}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <SimpleButton
          btnText="Edit"
          onClick={() => this.setState({ isEdit: !isEdit })}
          isActive={isFormOpen}
        />
        <SimpleButton
          btnText="Delete"
          onClick={() => {
            !file.transcription && onTranscript(file.filename);
            this.setState({
              isTranscribeOpen: !isTranscribeOpen
            });
          }}
          isActive={isTranscribeOpen}
        />
        <div className={styles.col_1} />
        <div className={styles.col_2}>
          <p>notes</p>
          <p>transcript</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
