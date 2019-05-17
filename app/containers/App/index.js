import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getCurrentUser } from '../authProvider/actions';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(App);