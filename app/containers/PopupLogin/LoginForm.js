import React from 'react';
import { reduxForm } from 'redux-form/immutable';
import { Field } from 'redux-form/immutable';
import { TextFields } from '../../components/ComponentForms';
import validate from './validate';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="text"
          placeholder="email@address.com"
          component={TextFields}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={TextFields}
          label="Password"
        />
        <div className="custom-control custom-checkbox">
          <Field type="checkbox" className="custom-control-input" id="rememberCheck" component="input" name="rememberCheck" />
          <label className="custom-control-label" htmlFor="rememberCheck">Keep me signed in</label>
        </div>
        <div>
          <button className="btn btn-primary d-flex justify-content-center login-button" type="submit">Sing in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'login', validate })(LoginForm);