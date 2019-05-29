import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { indexRoutes, PublicRoutes, PrivateRoutes } from './routes';

import AuthProvider from '../authProvider';
import ControlProvider from '../ControlProvider';
import DataProvider from '../dataProvider';

import _ from 'lodash';
import './style.scss';


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCurrentUser();
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
        <AuthProvider />
        <ControlProvider />
        <DataProvider />
        <Switch>
          {indexRoutes.map((route, key) => {
            if (!route.requireLogin) {
              return <PublicRoutes path={route.path} component={route.component} key={key} />
            } else {
              return <PrivateRoutes path={route.path} component={route.component} key={key} />
            }
          })}
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
