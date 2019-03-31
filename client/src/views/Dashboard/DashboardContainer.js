import React, { Component } from "react";
import { connect } from "react-redux";
import { DashboardMain } from "./DashboardMain";

import {
  getFoldersComplete,
  getFilesComplete,
  addFolderComplete,
  addFileComplete,
  deleteFolderComplete
} from "../../state/actions";

// Only fetch data needed for the Dashboard

class DashboardContainer extends Component {
  componentDidMount() {
    // redux-thunk function to fetch user assets (files,folders,etc.)
  }
  render() {
    return <DashboardMain />;
  }
}

const mapStateToProps = state => {
  return {
    folders: state.folders,
    files: state.files,
    user: state.user
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
)(DashboardContainer);
