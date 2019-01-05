import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./dashboard-container";
import TopNav from "../../../components/Nav/TopNav/TopNav";
import SideNav from "../../../components/Nav/SideNav/SideNav";
import Upload from "../../Upload/Upload";
import Folder from "../folder/folder-container";

import styles from "./dashboard-router.module.css";
import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete,
  axiosGetAllFiles,
  axiosGetAllFolders
} from "../../ducks/actions";

class DashboardRouter extends Component {
  componentDidMount() {
    axiosGetAllFolders().then(response => {
      this.props.dispatchSetFoldersState(response.data);
    });
    axiosGetAllFiles().then(response => {
      this.props.dispatchSetFilesState(response.data);
    });
  }
  render() {
    const {
      folders,
      files,
      dispatchAddFolderToState,
      dispatchDeleteFolder,
      dispatchAddUpload,
      match
    } = this.props;
    return (
      <div className={styles.view}>
        <TopNav />
        <div className={styles.body}>
          <SideNav />
          <div className={styles.contentWindow}>
            <Switch>
              <Route
                exact
                path="/user"
                render={() => (
                  <Dashboard
                  // folders={folders}
                  // files={files}
                  // dispatchAddFolderToState={dispatchAddFolderToState}
                  // dispatchDeleteFolder={dispatchDeleteFolder}
                  // match={match}
                  />
                )}
              />
              <Route
                path={`${match.url}/folder/:id`}
                render={({ match }) => (
                  <Folder
                    folders={folders}
                    files={files}
                    dispatchDeleteFolder={dispatchDeleteFolder}
                    match={match}
                  />
                )}
              />
              <Route
                path="/user/upload"
                render={({ match }) => (
                  <Upload
                    folders={folders}
                    dispatchAddFile={dispatchAddUpload}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    folders: state.folders,
    files: state.files
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchSetFoldersState: folders => dispatch(getFoldersComplete(folders)),
    dispatchAddFolderToState: folder => dispatch(addFolderComplete(folder)),
    dispatchDeleteFolder: id => dispatch(deleteFolderComplete(id)),
    dispatchSetFilesState: files => dispatch(getFilesComplete(files)),
    dispatchAddUpload: upload => dispatch(addFileComplete(upload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardRouter);
