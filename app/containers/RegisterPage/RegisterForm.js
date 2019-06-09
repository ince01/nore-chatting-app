import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFields, RadioFields, ImagePicker, DatePicker } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import validate from './validate';
import './styles.scss';

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="register-form">
        <Field
          name='avatar'
          component={ImagePicker}
        />
        <div className="form-fields">
          <div className="form-rows">
            <Field
              name="email"
              component={TextFields}
              label="Email"
              placeholder="username@email.com"
            />
            <Field
              name="password"
              component={TextFields}
              label="Password"
              type="password"
              placeholder="Your password"
            />
            <Field
              name="confirmPassword"
              component={TextFields}
              label="Confirm Password"
              type="password"
              placeholder="Retype your password"
            />

          </div>
          <div className="form-rows">
            <Field
              name="fullName"
              component={TextFields}
              label="Full Name"
              type="string"
              placeholder="Full Name"
            />
            <Field
              name="birthday"
              component={DatePicker}
              label="Birthday"
            />
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
        <Button
          type="submit"
          variant="outlined"
          color="primary"
        >
          Register
          </Button>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
};

export default reduxForm({ form: 'registerPage', validate })(RegisterForm)

