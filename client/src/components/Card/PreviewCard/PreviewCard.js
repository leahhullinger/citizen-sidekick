import React, { Component } from "react";
import { Alert } from "react-bootstrap";

import { Thumbnail } from "../../Thumbnail/Thumbnail";
import { SimpleButton } from "../../Button/Button";
import { TextDetect } from "../../TextDetect/TextDetect";
import { Form } from "../../Form/Form";
import styles from "./PreviewCard.module.css";

class PreviewCard extends Component {
  constructor(props) {
    super(props);
    const { file } = this.props;
    this.state = {
      isFormOpen: false,
      isTranscribeOpen: false,
      notes: file.notes || {
        title: "",
        folder_id: 0,
        date: "",
        text: ""
      }
    };
  }

  onUpdateInput = e =>
    this.setState({
      ...this.state,
      notes: { ...this.state.notes, [e.target.name]: String(e.target.value) }
    });

  render() {
    const { isFormOpen, isTranscribeOpen, notes } = this.state;
    const {
      file,
      onSubmitClick,
      onTranscript,
      onUpdateUpload,
      folders
    } = this.props;
    console.log(this.state.notes);
    return (
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.thumbnail}
            src={file.s3_url}
            alt="upload preview"
          />
        </div>
        <div className={styles.actions}>
          <SimpleButton
            btnText="ADD NOTES"
            onClick={() => this.setState({ isFormOpen: !isFormOpen })}
          />
          <SimpleButton
            btnText="TRANSCRIBE"
            onClick={() => {
              !file.transcription && onTranscript(file.filename);
              this.setState({
                isTranscribeOpen: !isTranscribeOpen
              });
            }}
          />
          <SimpleButton
            btnText="SAVE"
            onClick={() => {
              if (notes.folder_id === 0) {
                this.setState({ isFormOpen: true });
              }
              if (notes.folder_id !== 0) {
                onSubmitClick(file.filename);
              }
            }}
          />
        </div>
        {isFormOpen && (
          <div className={styles.formWrapper}>
            {notes.folder_id === 0 && (
              <Alert bsStyle="warning">A folder must be selected</Alert>
            )}
            <Form
              notes={notes}
              onUpdateInput={this.onUpdateInput}
              folders={folders}
            />
            <SimpleButton
              btnText="Save Notes"
              onClick={() => {
                onUpdateUpload(file.filename, { notes: this.state.notes });
                this.setState({ isFormOpen: false });
              }}
            />
          </div>
        )}
        <TextDetect
          focusOnLoad={false}
          onUpdateTranscription={onUpdateUpload}
          file={file}
          name="transcription"
          isOpen={isTranscribeOpen}
          onClose={() => {
            this.setState({ isTranscribeOpen: false });
          }}
        />
        {/* </Thumbnail> */}
      </div>
    );
  }
}

export default PreviewCard;
