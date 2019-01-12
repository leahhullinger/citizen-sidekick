import React, { Component } from "react";
import { NewFolderForm } from "./NewFolderForm/NewFolderForm";

export default class NewFolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      folderName: ""
    };
  }

  handleInputUpdate = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <NewFolderForm
        onClick={() => {
          this.props.onAddFolderClick(this.state.folderName);
        }}
        inputValue={this.state.folderName}
        handleInputUpdate={this.handleInputUpdate}
      />
    );
  }
}
