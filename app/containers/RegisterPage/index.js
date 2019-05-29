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

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialValues: {},
    }
  }

  onSubmit = (value) => {
    if (this.props.invalid) {
      return
    }
    this.props.onSubmitForm(value.toJS());
  }

  render() {
    const { initialValues } = this.state;
    return (
      <article className="register-page">
        <Helmet>
          <title>Register Page</title>
        </Helmet>
        <RegisterForm
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          enableReinitialize={true}
        />
      </article>
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