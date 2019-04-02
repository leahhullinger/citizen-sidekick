import React, { Component } from 'react';
import { Select, SelectHelperText } from '../../components/Form/Select/Select';
import { TextField } from '../../ui/TextFields';

const mockTags = ['text message', 'image', 'facebook'];

const formFields = {
  filename: {
    component: TextField
  }
};

export class UploadForm extends Component {
  state = {
    filename: ''
  };

  componentDidMount() {
    this.setState({ filename: this.props.file.filename || '' });
  }

  onInputChange = evt => ({
    ...this.state,
    [evt.target.name]: evt.target.value
  });

  render() {
    return (
      <div>
        <TextField label="file name" name="name" value={this.state.filename} />
        <TextField label="from" name="from" />
        <TextField label="to" name="to" />
      </div>
    );
  }
}

/**
 * User
 * files
 * folders
 * tags
 * places
 * connections
 */
