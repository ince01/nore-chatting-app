
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PopupLogin from '../PopupLogin';
import { popupLoginOpen } from '../App/actions';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.scss';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <section className="centered d-flex justify-content-center">
          <div className="m-2">
            <Button type="button" className="btn btn-secondary" onClick={() => { this.props.openPopup() }} >Login</Button>
          </div>
        </section>
        <PopupLogin />
      </div>
    );
  }
}

HomePage.propTypes = {
  openPopup: PropTypes.func,
  isOpen: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  openPopup: () => dispatch(popupLoginOpen()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(HomePage);
