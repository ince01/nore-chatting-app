import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFields, RadioFields } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import validate from './validate';
import './styles.scss';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="row">
            <div className="col">
              <Field
                name="fullName"
                component={TextFields}
                label="Full Name"
                type="string"
                placeholder="Full Name"
              />
            </div>
            <div className="col">
              <Field
                name="gender"
                component={RadioFields}
                label="Gender"
                options={['Men', 'Women', 'Other']}
                type="string"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name="email"
                component={TextFields}
                label="Email"
                type="string"
                placeholder="username@email.com"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name="password"
                component={TextFields}
                label="Password"
                type="password"
                placeholder="Your password"
              />
            </div>
            <div className="col">
              <Field
                name="confirmPassword"
                component={TextFields}
                label="Confirm Password"
                type="password"
                placeholder="Retype your password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                type="submit"
                variant="outlined"
                color="primary"
              >
                Register
            </Button>
            </div>
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

