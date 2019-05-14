/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginPage from '../LoginPage/Loadable';
import ChatPage from '../ChatPage/ChatPage';
import Grid from '../Grid/Grid';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    {/* <Helmet
      titleTemplate="%s - Nore Chatting"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header /> */}
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
      <Route path="/grid" component={Grid} />
    </Switch>
    {/* <Footer /> */}
  </div>
);

export default App;
