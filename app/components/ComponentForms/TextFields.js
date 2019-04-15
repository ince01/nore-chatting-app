import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class TextFieldCustom extends Component {
  render() {
    const { label, placeholder, meta: { touched, error, warning }, input } = this.props;
    return (
      <TextField
        name={label}
        label={label}
        placeholder={placeholder}
        margin="normal"
        error={touched && error}
        {...input}
      />
    )
  }
}

export default TextFieldCustom