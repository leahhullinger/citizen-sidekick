// s3 upload

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import { API_URL } from "../../state/constants";
import styles from "./FileSelect.module.css";

import { updateSelectedFiles } from "../../state/actions";

class FileSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      s3Urls: []
    };
  }

  oncancel = () => {
    this.setState({ files: [] });
  };

  onDrop = files => {
    var file = files[0];
    console.log(files);
    this.props.onUpdateLoading(true);

    axios
      .post(`${API_URL}/aws`, {
        filename: file.name,
        filetype: file.type
      })

      .then(function(result) {
        var signedUrl = result.data;
        var options = {
          headers: {
            "Content-Type": file.type
          }
        };
        return axios.put(signedUrl, file, options);
      })
      .then(res => {
        this.props.setFileUrl(res.config.url, file);
      })
      .catch(function(err) {
        console.log(2, err);
      });
  };

  render() {
    const isDropZoneClass = this.props.isDropZone ? styles.dropZone : "";
    return (
      <Dropzone
        className={styles.uploadArea}
        onDrop={this.onDrop}
        onFileDialogCancel={this.onCancel}
        disabled={this.props.disabled || false}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className={isDropZoneClass}>
            {this.props.isDropZone ? "UPLOAD FILE" : "ADD ANOTHER FILE"}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
    );
  }
}
function mapStateToProps(state) {
  return {
    filesToUpload: state.filesToUpload
  };
}
export default connect(
  mapStateToProps,
  { updateSelectedFiles }
)(FileSelect);
