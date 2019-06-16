import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onChangeTab, openPopupAddFr } from '../../ControlProvider/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectNavTabStatus } from '../../ControlProvider/selector';
import { makeSelectCurrentUser } from 'containers/authProvider/selector';
import { Avatar } from '../../../components/ComponentForms';
import { ItemChat, ItemContact } from '../../../components';
import iconAddFr from 'images/add-friend.svg';
import SearchForm from './SearchForm';
import PopupAddFriend from './popupAddFriend';
import { TAB_NOTIFICATION, TAB_CONTACT } from 'utils/constants';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import './style.scss';
import axios from 'axios';

class SideBarNav extends Component {

  selectTabNotification = () => {
    this.props.onChangeTab(TAB_NOTIFICATION);
  }

  selectTabContact = () => {
    this.props.onChangeTab(TAB_CONTACT);
  }

  onClickAddFr = () => {
    this.props.openPopupAddFr();
  }


  ItemUserContact(user) {
    return (
      <>
        <div className="item-user-contact">
          {
            user.avatarUrl ? <img src={user.avatarUrl} /> :
              <img src='https://img.icons8.com/cotton/36/000000/gender-neutral-user.png' />
          }
          <div className="item-info" >
            <div className="name" >{user.fullName}</div>
          </div>
          <Button onClick={() => { this.props.accectFriend(user) }}>Comform</Button>
        </div>
      </>
    );
  }



  render() {
    const { navTabStatus } = this.props;
    const { fullName, avatarUrl, friends } = this.props.currentUser;

    return (
      <div className="side-bar-nav">
        <div className="control">
          <div className="user-info" >
            <Avatar src={avatarUrl} />
            <div className="user-name" >{fullName}</div>
            <img className="icon-add-fr" src={iconAddFr} onClick={this.onClickAddFr} />
            <PopupAddFriend
              onHide={this.onHidePopupAddFr}
              handleConfirm={(user) => { this.props.accectFriend(user) }}
              handleAddFriend={(user) => { this.props.handleAddFriend(user) }}
            />
          </div>
          {/* <div className="search-field" >
            <SearchForm />
          </div> */}
          <div className="tab-bar" >
            <div className="contact" onClick={this.selectTabContact}>
              <img src="https://img.icons8.com/ultraviolet/20/000000/contacts.png" />
              <div className="descr" > Contact </div>
            </div>
            <div className="chat" onClick={this.selectTabNotification} >
              <img src="https://img.icons8.com/ultraviolet/40/000000/appointment-reminders.png" />
              <div className="descr" > Notification </div>
            </div>
          </div>
        </div>
        {
          navTabStatus === TAB_NOTIFICATION &&
          <div className="list-chat" >
            {this.props.listFriendRequest.map(i => {
              return this.ItemUserContact(i);
            })}
          </div>
        }
        {
          navTabStatus === TAB_CONTACT &&
          <div className="list-contact" >
            {!_.isEmpty(friends) && friends.map((i, index) => {
              return <ItemContact active={i._id === this.props.idFriendCurrent} key={index} user={i} onClick={() => { this.props.onChangeUserChatting(i) }} />
            })}
          </div>
        }
      </div>
    )
  }
}

SideBarNav.propTypes = {
  navTabStatus: PropTypes.string.isRequired,
  currentUser: PropTypes.object.isRequired,
  onChangeTab: PropTypes.func,
  openPopupAddFr: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  navTabStatus: makeSelectNavTabStatus(),
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTab: (status) => dispatch(onChangeTab(status)),
  openPopupAddFr: () => dispatch(openPopupAddFr()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(SideBarNav);