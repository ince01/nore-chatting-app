import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import FeaturePage from 'containers/FeaturePage/FeaturePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from '../HomePage/Loadable';
import RegisterPage from '../RegisterPage/Loadable';
import ChatPage from '../ChatPage/Loadable';

import _ from 'lodash';
import './style.scss';

const isAuthenticated = () => {
  const checker = window.localStorage.getItem('sessionToken');
  if (checker) {
    return true;
  } else return false;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated()
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)}
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-wrapper">
        <Helmet
          titleTemplate="%s - Nore Chatting"
          defaultTitle="Nore Chatting App"
        >
          <meta name="description" content="A Chatting application like Zalo" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/features" component={FeaturePage} />
          <PrivateRoute path="/home" component={ChatPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
