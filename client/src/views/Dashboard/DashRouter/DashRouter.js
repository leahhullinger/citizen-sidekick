import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// import DashboardMain from "../DashboardMain/DashboardMain";
import { NewFolderForm } from "../../../components/Folder/NewFolderForm/NewFolderForm";
import Folder from "../../Folder/Folder";
import Upload from "../../Upload/Upload";
import SideNav from "../../../components/Nav/SideNav/SideNav";
import DashboardMain from "../DashboardMain/DashboardMain";

import styles from "./DashRouter.module.css";
import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete,
  axiosGetAllFiles,
  axiosGetAllFolders
} from "../../../ducks/actions";

class DashRouter extends Component {
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
      <div className={styles.container}>
        <SideNav
          folders={folders}
          match={match}
          dispatchAddFolderToState={dispatchAddFolderToState}
        />
        <div className={styles.body}>
          <Switch>
            <Route
              exact
              path="/user"
              render={() => (
                <DashboardMain
                  folders={folders}
                  files={files}
                  dispatchAddFolderToState={dispatchAddFolderToState}
                  dispatchDeleteFolder={dispatchDeleteFolder}
                  match={match}
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
                <Upload folders={folders} dispatchAddFile={dispatchAddUpload} />
              )}
            />
            <Route path={`${match.url}/new/folder`} component={NewFolderForm} />
          </Switch>
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
)(DashRouter);
