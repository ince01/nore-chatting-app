import React from 'react';
import _ from 'lodash';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoutes extends React.Component {
  render() {
    const { component, path } = this.props;
    const authToken = localStorage.getItem('sessionToken');
    if (authToken) {
      return <Route path={path} component={component} />
    } else {
      return <Redirect to='/' />
    }
  }
}

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoutes