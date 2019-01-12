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
          {files.map(file => {
            return (
              <div key={file.id}>
                <FileCard key={file.id} file={file} />
              </div>
            );
          })}
        </div>
        <div>hello</div>
        <div>
          <h1 className={styles.mainTitle}> / dash</h1>
        </div>
        <div>hello</div>
      </div>
    );
  }
}

export default DashboardMain;
