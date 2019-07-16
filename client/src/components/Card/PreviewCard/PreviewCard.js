import React, { Component } from "react";

import { Thumbnail } from "../../Thumbnail/Thumbnail";
// import { SimpleButton } from "../../Button/Button";
import { TextField } from "../../../ui/TextFields";
import { TextArea } from "../../Form/TextArea/TextArea";
import { TextDetect } from "../../TextDetect/TextDetect";
import { Loading } from "../../Loading/Loading";
import { Form } from "../../Form/Form";
import { Card } from "../Card";
import styles from "./PreviewCard.module.css";
import {
  CardPrimaryAction,
  CardActions,
  CardActionButtons,
  CardActionButton
} from "@rmwc/card";

class PreviewCard extends Component {
  constructor(props) {
    super(props);
    const { file } = this.props;
    this.state = {
      isFormOpen: false,
      isTranscribeOpen: false,
      isTranscribing: false,
      notes: file.notes || {
        title: "",
        folder_id: 0,
        date: "",
        text: ""
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.file.transcript && !!this.props.file.transcript) {
      this.setState({ isTranscribing: false });
    }
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
      folders,
      onCancel
    } = this.props;
    return (
      <Card onClick={() => onCancel(file.filename)}>
        <CardPrimaryAction style={{ display: "flex", flexDirection: "row" }}>
          <Thumbnail
            // className={styles.thumbnail}
            src={file.s3_url}
            alt="upload preview"
          />
          {this.state.isTranscribing && <Loading />}
          {!!file.transcript && (
            <TextArea
              placeholder="Transription"
              value={file.transcript}
              name="transcription"
              onChange={e => {
                onUpdateUpload(file.filename, {
                  transcript: e.target.value
                });
              }}
              disabled={!file.transcript}
            />
            // <TextField
            //   textarea
            //   outlined
            //   fullwidth
            //   label="Transcription"
            //   rows={8}
            //   maxLength={20}
            //   characterCount
            //   name="transcription"
            //   value={!!file.transcript && file.transcript}
            //   onChange={e => {
            //     onUpdateUpload(file.filename, {
            //       transcript: e.target.value
            //     });
            //   }}
            // />
          )}
        </CardPrimaryAction>
        <CardActions>
          <CardActionButtons>
            <CardActionButton
              onClick={() => {
                !file.transcription && onTranscript(file.filename);
                this.setState({ isTranscribing: true });
              }}
            >
              transcribe
            </CardActionButton>
            <CardActionButton>save</CardActionButton>
          </CardActionButtons>
        </CardActions>
        {/* <SimpleButton
            btnText="ADD NOTES"
            onClick={() => this.setState({ isFormOpen: !isFormOpen })}
            isActive={isFormOpen}
          />
          <SimpleButton
            btnText="TRANSCRIBE"
            onClick={() => {
              !file.transcription && onTranscript(file.filename);
              this.setState({
                isTranscribeOpen: !isTranscribeOpen
              });
            }}
            isActive={isTranscribeOpen}
          />
          <SimpleButton
            btnText="SAVE"
            onClick={() => onSubmitClick(file.filename)}
          /> */}
        {isFormOpen && (
          <div className={styles.formWrapper}>
            <Form
              notes={notes}
              onUpdateInput={this.onUpdateInput}
              folders={folders}
            />
            {/* <SimpleButton
              btnText="Save Notes"
              onClick={() => {
                onUpdateUpload(file.filename, { notes: this.state.notes });
                this.setState({ isFormOpen: false });
              }}
            /> */}
          </div>
        )}
        {/* <TextDetect
          focusOnLoad={false}
          onUpdateTranscription={onUpdateUpload}
          file={file}
          name="transcription"
          isOpen={isTranscribeOpen}
          onClose={() => {
            this.setState({ isTranscribeOpen: false });
          }}
        /> */}
        {/* </Thumbnail> */}
      </Card>
    );
  }
}

export default PreviewCard;
