import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { findPeople } from 'containers/dataProvider/actions';
import { closePopupAddFr } from 'containers/ControlProvider/actions';
import { addFriend, confirm } from 'containers/ChatPage/SideBarNav/popupAddFriend/actions'
import { createStructuredSelector } from 'reselect';
import { makeSelectlistFindPeople } from 'containers/dataProvider/selector';
import { makeSelectPopupAddFrStatus } from 'containers/ControlProvider/selector';
import { ItemPeople } from 'components'
import FindPeopleForm from './FindPeopleForm';
import { Modal } from 'react-bootstrap';
import _ from 'lodash';
import './style.scss';

class PopupAddFriend extends Component {

  onSubmit = (value) => {
    this.props.onSubmitForm(value);
  }

  render() {
    const { show, onHide, listFindPeople, handleAddFriend, handleConfirm } = this.props;
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header >
          <div className="modal-title title-popup" id="addFriendModal">Add a new contact</div>
        </Modal.Header>
        <Modal.Body>
          <FindPeopleForm onSubmit={this.onSubmit} />
          {_.isArray(listFindPeople) &&
            !_.isEmpty(listFindPeople) &&
            <div className="list-find-people">
              {listFindPeople.map((user, index) => {
                return (
                  <ItemPeople
                    key={index}
                    name={user.fullName}
                    id={user._id}
                    relationshipStatus={user.relationshipStatus}
                    handleAddFriend={() => { handleAddFriend(user) }}
                    handleConfirm={() => { handleConfirm(user) }}
                  />
                )
              })}
            </div>
          }
        </Modal.Body>
      </Modal>
    )
  }
}

PopupAddFriend.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onSubmitForm: PropTypes.func,
  listFindPeople: PropTypes.array,
  // handleAddFriend: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  listFindPeople: makeSelectlistFindPeople(),
  show: makeSelectPopupAddFrStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (data) => dispatch(findPeople(data.toJS())),
  onHide: () => dispatch(closePopupAddFr()),
  // handleAddFriend: (data) => dispatch(addFriend(data)),
  // handleConfirm: (data) => dispatch(confirm(data)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'popupAddFriend', reducer });
const withSaga = injectSaga({ key: 'popupAddFriend', saga });

export default compose(withConnect, withReducer, withSaga)(PopupAddFriend);
