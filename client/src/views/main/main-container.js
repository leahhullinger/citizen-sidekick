import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NewFolder from '../../components/Folder/NewFolder';
import Folder from '../Folder/Folder';
import Upload from '../upload/Upload';
import SideNav from '../../components/Nav/SideNav/SideNav';
import { signoutUser } from '../../state/user/user-actions';
import { DashboardMain } from './main';

import { axiosDeleteFolder, axiosAddFolder } from '../../state/actions';

import styles from './main-container.module.css';
import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete
} from '../../state/actions';

class MainContainer extends Component {
  componentDidMount() {}

  onAddFolderClick = folderName => {};

  onDeleteFolder = id => {
    console.log(id);
    axiosDeleteFolder(id).then(response => {
      console.log(response);
      this.props.dispatchDeleteFolder(id);
    });
  };

  render() {
    const { folders, files, dispatchAddUpload, match, userLogout } = this.props;
    return (
      <div className={styles.container}>
        <SideNav
          folders={folders}
          match={match}
          onAddFolderClick={this.onAddFolderClick}
        />
        <div className={styles.body}>
          <p onClick={() => userLogout()}>logout</p>
          <DashboardMain />
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
    dispatchAddUpload: upload => dispatch(addFileComplete(upload)),
    userLogout: () => dispatch(signoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
