import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from '../HomePage/Loadable';
import RegisterPage from '../RegisterPage/Loadable';
import ChatPage from '../ChatPage/index';
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
          <PrivateRoute path="/chat" component={ChatPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <ReduxToastr
          timeOut={2500}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          closeOnToastrClick />
      </div>
    )
  }
}

export default App;
