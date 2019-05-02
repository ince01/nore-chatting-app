import React, { Component } from 'react';
import { Send } from '@material-ui/icons'
import PropTypes from 'prop-types';
import _ from 'lodash';

class InputButtonField extends Component {

  handleClick = () => {
    console.log(this.props.input.value)
    console.log('ssss')
  }

  render() {
    const { placeholder, input } = this.props;
    console.log(this.props.input);
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          aria-describedby="basic-addon2"
          onChange={input.onChange}
          value={input.value}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={this.handleClick}><Send /></button>
        </div>
      </div>

    )
  }
}

InputButtonField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  // touched: PropTypes.bool,
  // error: PropTypes.any,
  // warning: PropTypes.any,
  input: PropTypes.any,
  type: PropTypes.any,
  name: PropTypes.string,
};

export default InputButtonField
