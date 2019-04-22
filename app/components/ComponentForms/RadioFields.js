import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@material-ui/core';

class RadioField extends React.Component {
  render() {
    const { input, options, label, meta: { touched, error, warning } } = this.props;

    let elements = options && options.map((option, index) => {
      return (
        <div key={index} {...input} className='form-check form-check-inline'>
          <Radio id={`radioButton${input.name}#${index}`} value={option.objectId || option} checked={input.value === (option.objectId || option)} />
          <label className='form-check-label' htmlFor={`radioButton${input.name}#${index}`}>{option.name || option}</label>
        </div>
      );
    })

    return (
      <div className='text-field-container'>
        <div className='text-field-label'>{label}</div>
        <div className='input-field'>
          <div className='radio-content d-flex align-items-center justify-content-between'>
            {elements}
          </div>
          {touched && (
            (error && (
              <div className='alert alert-danger alert-field' role='alert'>{error}</div>
            )) ||
            (warning && (
              <div className='alert alert-warning alert-field' role='alert'>{warning}</div>
            ))
          )}
        </div>
      </div>
    )
  }
}

RadioField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default RadioField;