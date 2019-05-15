import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { login, popupLoginClose } from '../App/actions';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectPopupLoginStatus, makeSelectError } from '../App/selectors';
import _ from 'lodash';
import saga from './saga';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Modal } from 'react-bootstrap';
import './styles.scss';

class PopupLogin extends Component {

  onSubmit = (value) => {
    if (!this.props.invail) {
      this.props.onSubmitForm(value);
      // this.props.closePopup();
    }
  }

  render() {
    const { isOpen, closePopup } = this.props;
    return (
      <>
        <Modal show={isOpen} onHide={closePopup}>
          <Modal.Header closeButton>
            <div className="modal-title title-popup" id="loginModal">Sign in</div>
          </Modal.Header>
          <Modal.Body>
            <LoginForm onSubmit={this.onSubmit} />
            <Link className="link-forgot-password" to="/">Forgot my password</Link>
          </Modal.Body>
          <Modal.Footer>
            No account? <Link to="/register" onClick={() => closePopup} className="link-register"> Create one!</Link>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

PopupLogin.propTypes = {
  onSubmitForm: PropTypes.func,
  closePopup: PropTypes.func,
  isOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isOpen: makeSelectPopupLoginStatus(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (data) => dispatch(login(data.toJS())),
  closePopup: () => dispatch(popupLoginClose()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'popupLogin', saga });

export default compose(withConnect, withSaga)(PopupLogin);
