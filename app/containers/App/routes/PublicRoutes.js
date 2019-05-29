import React from 'react';
import _ from 'lodash';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PublicRoutes extends React.Component {
  render() {
    const { component, path } = this.props;
    const authToken = localStorage.getItem('sessionToken');
    if (authToken) {
      return <Redirect to='/chat' />
    } else {
      return <Route path={path} component={component} />
    }
  }
}

PublicRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  path: PropTypes.string.isRequired,
  currentUser: PropTypes.object
};

export default PublicRoutes