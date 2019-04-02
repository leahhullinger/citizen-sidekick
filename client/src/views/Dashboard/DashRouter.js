import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NewFolder from '../../components/Folder/NewFolder';
import Folder from '../Folder/Folder';
import Upload from '../upload/Upload';
import SideNav from '../../components/Nav/SideNav/SideNav';
import { DashboardMain } from './DashboardMain';
import { axiosDeleteFolder, axiosAddFolder } from '../../state/actions';

import styles from './DashRouter.module.css';
import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete,
  axiosGetAllFiles,
  axiosGetAllFolders
} from '../../state/actions';

class DashRouter extends Component {
  componentDidMount() {
    axiosGetAllFolders().then(response => {
      this.props.dispatchSetFoldersState(response.data);
    });
    axiosGetAllFiles().then(response => {
      this.props.dispatchSetFilesState(response.data);
    });
  }

  onAddFolderClick = folderName => {
    axiosAddFolder(folderName)
      .then(response => {
        this.props.dispatchAddFolderToState(response.data.folder);
      })
      .catch(err => console.log(err));
  };

  onDeleteFolder = id => {
    console.log(id);
    axiosDeleteFolder(id).then(response => {
      console.log(response);
      this.props.dispatchDeleteFolder(id);
    });
  };

  render() {
    const { folders, files, dispatchAddUpload, match } = this.props;
    return (
      <div className={styles.container}>
        <SideNav
          folders={folders}
          match={match}
          onAddFolderClick={this.onAddFolderClick}
        />
        <div className={styles.body}>
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={() => (
                <DashboardMain folders={folders} files={files} match={match} />
              )}
            />
            <Route
              path={`${match.url}/folder/:id`}
              render={({ match }) => (
                <Folder
                  folders={folders}
                  files={files}
                  dispatchDeleteFolder={this.onDeleteFolder}
                  match={match}
                />
              )}
            />
            <Route
              path={`${match.url}/upload`}
              render={({ match }) => (
                <Upload folders={folders} dispatchAddFile={dispatchAddUpload} />
              )}
            />
            <Route
              path={`${match.url}/new/folder`}
              render={() => (
                <NewFolder onAddFolderClick={this.onAddFolderClick} />
              )}
            />
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
