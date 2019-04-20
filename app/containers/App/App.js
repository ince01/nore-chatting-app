import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/index';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import LoginPage from '../LoginPage/Loadable';
import RegisterPage from '../RegisterPage/Loadable';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Nore Chatting"
      defaultTitle="Nore Chatting App"
    >
      <meta name="description" content="A Chatting application like Zalo" />
    </Helmet>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    {/* <Footer /> */}
  </div>
);

export default App;
