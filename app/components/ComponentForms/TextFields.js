import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class TextFieldCustom extends Component {
  render() {
    const { label, placeholder, meta: { touched, error, warning }, input, type } = this.props;

    return (
      <TextField
        label={label}
        placeholder={placeholder}
        type={type}
        margin="normal"
        error={touched && error}
        {...input}
      />
    )
  }
}

export default TextFieldCustom