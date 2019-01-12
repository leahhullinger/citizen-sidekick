import React, { Component } from "react";
import FileCard from "../../../components/Card/FileCard/FileCard";
import styles from "./DashboardMain.module.css";

class DashboardMain extends Component {
  // onAddFolderClick = folderName => {
  //   axiosAddFolder(folderName)
  //     .then(response => {
  //       this.props.dispatchAddFolderToState(response.data.folder);
  //     })
  //     .catch(err => console.log(err));
  // };

  // onDeleteFolder = id => {
  //   console.log(id);
  //   axiosDeleteFolder(id).then(response => {
  //     console.log(response);
  //     this.props.dispatchDeleteFolder(id);
  //   });
  // };

  handleInputUpdate = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { folders, match, files } = this.props;

    return (
      <div className={styles.mainContainer}>
        <div>
          <h4>Recent Files</h4>

          {files.map(file => {
            return (
              <div key={file.id} className={styles.fileList}>
                <p className={styles.title}>{file.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.view}>
          <h4>VIEW 2</h4>
        </div>
        <div className={styles.view}>
          <h4>VIEW </h4>
        </div>

        {/* <div>
          <h1 className={styles.mainTitle}> / dash</h1>
        </div> */}
        {/* <div>hello</div> */}
      </div>
    );
  }
}

export default DashboardMain;
