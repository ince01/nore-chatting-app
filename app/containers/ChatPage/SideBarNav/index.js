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
import { TAB_CHAT, TAB_CONTACT } from 'utils/constants';
import _ from 'lodash';
import './style.scss';

class SideBarNav extends Component {

  selectTabChat = () => {
    this.props.onChangeTab(TAB_CHAT);
  }

  selectTabContact = () => {
    this.props.onChangeTab(TAB_CONTACT);
  }

  onClickAddFr = () => {
    this.props.openPopupAddFr();
  }

  render() {
    const { navTabStatus } = this.props;
    const { fullName, avatarUrl, friends } = this.props.currentUser;

    console.log(friends);

    return (
      <div className="side-bar-nav">
        <div className="control">
          <div className="user-info" >
            <Avatar src={avatarUrl} />
            <div className="user-name" >{fullName}</div>
            <img className="icon-add-fr" src={iconAddFr} onClick={this.onClickAddFr} />
            <PopupAddFriend
              onHide={this.onHidePopupAddFr}
            />
          </div>
          <div className="search-field" >
            <SearchForm />
          </div>
          <div className="tab-bar" >
            <div className="chat" onClick={this.selectTabChat} >
              <img src="https://img.icons8.com/office/20/000000/speech-bubble.png" />
              <div className="descr" > Chat </div>
            </div>
            <div className="contact" onClick={this.selectTabContact}>
              <img src="https://img.icons8.com/ultraviolet/20/000000/contacts.png" />
              <div className="descr" > Contact </div>
            </div>
          </div>
        </div>
        {
          navTabStatus === TAB_CHAT &&
          <div className="list-chat" >
            <ItemChat />
          </div>
        }
        {
          navTabStatus === TAB_CONTACT &&
          !_.isEmpty(friends) && friends.map((friend) => {
            return (
              < div className="list-contact" >
                <ItemContact avatarUrl={friend.avatarUrl} name={friend.name} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

SideBarNav.propTypes = {
  navTabStatus: PropTypes.bool.isRequired,
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