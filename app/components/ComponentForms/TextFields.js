import React from 'react';

class TextField extends React.Component {
  render() {
    const { input, label, placeholder, type, meta: { touched, error, warning } } = this.props;

    return (
      <div className="text-field-container">
        <div className="text-field-label">{label}</div>
        <div className="input-group mb-3">
          <div className="input-field">
            <input {...input} placeholder={placeholder} type={type} className="form-control input-box" />
            {touched && (
              (error && (
                <div className="alert alert-danger alert-field" role="alert">{error}</div>
              )) ||
              (warning && (
                <div className="alert alert-warning alert-field" role="alert">{warning}</div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default TextField;