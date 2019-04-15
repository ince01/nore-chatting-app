import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <article>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <LoginForm />
      </article>
    )
  }
}

export default LoginPage

