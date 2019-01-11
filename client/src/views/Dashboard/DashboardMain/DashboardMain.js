import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Link, Route } from "react-router-dom";
import SideNav from "../../../components/Nav/SideNav/SideNav";
import Upload from "../../Upload/Upload";
import Folder from "../../Folder/Folder";
import NewFolderForm from "../../../components/Folder/NewFolderForm/NewFolderForm";
import styles from "./DashboardMain.module.css";

import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete,
  axiosGetAllFiles,
  axiosGetAllFolders
} from "../../../ducks/actions";

// const DashboardMain = () => (
//   <div className={styles.mainContainer}>
//     <div>hello</div>
//     <div>hello</div>
//     <div>
//       <h1 className={styles.mainTitle}> / dash</h1>
//     </div>
//     <div>hello</div>
//   </div>
// );

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
        <div>hello</div>
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
