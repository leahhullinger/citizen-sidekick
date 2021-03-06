import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// redux
import { axiosAddFile } from "../../ducks/actions";
import { API_URL } from "../../ducks/constants";
// components
import FileSelect from "../../components/FileSelect/FileSelect";
import PreviewCard from "../../components/Card/PreviewCard/PreviewCard";
import { Loading } from "../../components/Loading/Loading";
import { PrimaryBtn } from "../../components/Button/PrimaryBtn";
import { TextArea } from "../../components/Form/TextArea/TextArea";
import { Icon } from "mx-react-components";
// css
import styles from "./Upload.module.css";

// template form for newUploadForm, newUserForm
// redux

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      uploads: []
    };
  }
  componentDidMount() {
    this.setState({ loading: false, uploads: [] });
  }

  onUpdateLoading = val => this.setState({ loading: val });

  onUpdateUpload = (filename, updated) => {
    const updatedUploads = this.state.uploads.map(f => {
      if (f.filename === filename) {
        return { ...f, ...updated };
      }
      return f;
    });
    this.setState({ uploads: updatedUploads });
  };

  onCancelUploadFile = fileName => {
    const updated = this.state.uploads.filter(f => f.filename !== fileName);
    this.setState({ uploads: updated });
  };

  onTranscript = file => {
    console.log("file being passed", file);
    axios
      .post(`${API_URL}/textDetect`, { file })
      .then(response => {
        console.log(response.data);
        this.onUpdateUpload(file, { transcript: response.data });
      })
      .catch(err => console.log(err));
  };

  onAudioTranscribe = (file, url) => {
    axios
      .post("http://localhost:3005/api/aws/transcribe", {
        filename: this.state.file.name,
        filetype: this.state.file.type,
        s3_url: this.state.s3_url
      })
      .then(response => {
        console.log(response.data);
      });
  };
  // s3 function passed to s3 upload function in fileSelect
  setFileUrl = (url, file) => {
    var newUrl = url.substring(0, url.indexOf("?"));
    console.log(file);
    this.setState({
      loading: false,
      uploads: [
        ...this.state.uploads,
        {
          s3_url: newUrl,
          filename: file.name,
          filetype: file.type,
          isSubmitted: false
        }
      ]
    });
  };

  // title, date, notes, filename, filetype, s3_url, transcript, folder_id
  onSubmitClick = filename => {
    const file = this.state.uploads.find(file => file.filename === filename);
    const uploadFile = {
      title: file.notes ? file.notes.title : "",
      date: file.notes ? file.notes.date : "",
      notes: file.notes ? file.notes.text : "",
      filename: file.filename,
      filetype: file.filetype,
      s3_url: file.s3_url,
      transcript: file.transcript || "",
      folder_id: Number(file.notes.folder_id)
    };
    console.log(uploadFile);
    axiosAddFile(uploadFile)
      .then(res => {
        this.props.dispatchAddFile(uploadFile);
        this.onUpdateUpload(filename, { isSubmitted: true });
      })
      .catch(err => console.log({ err }));
  };

  // ADD CREATE FOLDER BUTTON, FOLDER SELECT
  render() {
    const { uploads, loading } = this.state;
    const fileCount = this.state.uploads.filter(item => !item.isSubmitted)
      .length;
    const submittedFiles = uploads.filter(file => file.isSubmitted);
    return (
      <div className={styles.uploadContainer}>
        <div className={styles.uploadWrapper}>
          {!!loading && <Loading className={styles.previewCardPlaceholder} />}
          {uploads.map((file, index) => {
            return (
              !file.isSubmitted && (
                <PreviewCard
                  key={index}
                  file={file}
                  folders={this.props.folders}
                  onUpdateUpload={this.onUpdateUpload}
                  onTranscript={this.onTranscript}
                  onSubmitClick={this.onSubmitClick}
                  onCancel={this.onCancelUploadFile}
                />
              )
            );
          })}
          {(fileCount < 2 || (fileCount === 2 && !loading)) && (
            <FileSelect
              setFileUrl={this.setFileUrl}
              onUpdateLoading={this.onUpdateLoading}
              isDropZone={true}
              onUpdateUpload={this.onUpdateUpload}
            />
          )}
          <div
            className={!submittedFiles.length ? styles.hidden : styles.saved}
          >
            {submittedFiles.map(file => (
              <p className={styles.savedItem} key={file.filename}>
                + {file.filename} saved
              </p>
            ))}
          </div>
        </div>
        <div className={styles.footer}>
          <Link to="/user">
            <PrimaryBtn btnText="Back" />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    folderIds: state.folders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchOnFileSubmit: file => dispatch(console.log(file))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
