import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { login } from '../App/actions';
import saga from './saga';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialValues: {},
    }
  }

  onSubmit = (value) => {
    if (this.props.invail) {
      return
    }
    this.props.onSubmitForm(value.toJS());
  }

  render() {
    const { initialValues } = this.state;
    return (
      <div className="login-page">
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <div >
          <LoginForm
            onSubmit={this.onSubmit}
            initialValues={initialValues}
            enableReinitialize={true}
          />
        </div>
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
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(withSaga, withConnect)(LoginPage);