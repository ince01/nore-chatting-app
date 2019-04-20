import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFieldCustom } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import validate from './validate';
import './styles.scss';

class RegisterForm extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="row">
            <Field
              name="fullName"
              component={TextFieldCustom}
              label="Full Name"
              type="string"
              placeholder="Full Name"
            />
          </div>
          <div className="row">
            <Field
              name="email"
              component={TextFieldCustom}
              label="Email"
              type="string"
              placeholder="username@email.com"
            />
          </div>
          <div className="row">
            <Field
              name="password"
              component={TextFieldCustom}
              label="Password"
              type="password"
              placeholder="Your password"
            />
          </div>
          <div className="row">
            <Field
              name="confirmPassword"
              component={TextFieldCustom}
              label="Confirm Password"
              type="password"
              placeholder="Retype your password"
            />
          </div>
          <div className="row">
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              disabled={invalid}
            >
              Register
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
};

export default reduxForm({ form: 'registerPage', validate })(RegisterForm)

