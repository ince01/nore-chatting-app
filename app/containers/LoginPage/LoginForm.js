import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { TextFieldCustom } from '../../components/ComponentForms'
import { Button } from '@material-ui/core'
import './styles.scss';

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <Field
            component={TextFieldCustom}
            label="Email"
          />
          <Field
            component={TextFieldCustom}
            label="Password"
          />
        </div>
        <div>
          <Button variant="outlined" color="primary">Login</Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'login' })(LoginForm)

