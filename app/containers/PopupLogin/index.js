import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { popupLoginClose } from '../App/actions';
import { login } from '../authProvider/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectPopupLoginStatus } from '../App/selectors';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import _ from 'lodash';
import './styles.scss';

class PopupLogin extends Component {

  onSubmit = (value) => {
    this.props.onSubmitForm(value);
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
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (data) => dispatch(login(data.toJS())),
  closePopup: () => dispatch(popupLoginClose()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(PopupLogin);
