import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFieldCustom } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import './styles.scss';

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={TextFieldCustom}
            label="Email"
            type="string"
          />
          <Field
            name="password"
            component={TextFieldCustom}
            label="Password"
            type="password"
          />
        </div>
        <div>
          <Button type="submit" variant="outlined" color="primary">Login</Button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'login' })(LoginForm)

