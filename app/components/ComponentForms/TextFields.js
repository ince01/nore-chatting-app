import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import _ from 'lodash';

class TextFieldCustom extends Component {
  render() {
    const { label, placeholder, meta: { touched, error, warning }, input, type, name } = this.props;
    return (
      <div>
        <TextField
          name={name}
          label={label}
          placeholder={placeholder}
          type={type}
          variant="outlined"
          margin="normal"
          fullWidth
          error={touched && _.isString(error)}
          helperText={touched && (error || warning)}
          {...input}
        />
      </div>
    )
  }
}

TextFieldCustom.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.any,
  warning: PropTypes.any,
  input: PropTypes.any,
  type: PropTypes.any,
  name: PropTypes.string,
};

export default TextFieldCustom