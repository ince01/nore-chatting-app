import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFieldCustom } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import validate from './validate';
import './styles.scss';

class LoginForm extends Component {
  render() {
    const { handleSubmit, invalid } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="login-form">
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
            <Button
              type="submit"
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
            <Link style={{ marginLeft: '20px' }} to='/register' >Register here!</Link>
          </div>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
};

export default reduxForm({ form: 'loginPage', validate })(LoginForm)

