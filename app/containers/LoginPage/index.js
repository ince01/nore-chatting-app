import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from '../App/reducer';
import { login } from '../App/actions';
import saga from './saga';
import LoginForm from './LoginForm';

class LoginPage extends Component {

  onSubmit = (value) => {
    this.props.onSubmitForm(value.toJS());
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

LoginPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (value) => dispatch(login(value))
});

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(withReducer, withSaga, withConnect)(LoginPage);