import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import { register } from './actions';
import saga from './saga';
import RegisterForm from './RegisterForm';
import background from 'images/background.png';

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialValues: {},
    }
  }

  onSubmit = (value) => {
    if (this.props.invalid) {
      return;
    }
    this.props.onSubmitForm(value.toJS());
  }

  render() {
    const { initialValues } = this.state;
    return (
      <>
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <div className="register-page">
          <div className="register-container">
            <div className="register-page-header">
              <h1 className="title">Sign up</h1>
              <div className="desc">Get started with a free account</div>
            </div>
            <RegisterForm
              onSubmit={this.onSubmit}
              initialValues={initialValues}
              enableReinitialize={true}
            />
          </div>

          <div className="background-right" style={{ backgroundImage: `url(${background})` }} />
        </div>
      </>
    )
  }
}

RegisterPage.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (value) => dispatch(register(value))
});

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });

export default compose(withReducer, withSaga, withConnect)(RegisterPage);