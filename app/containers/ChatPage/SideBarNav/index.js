import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { onChangeTab } from '../../ControlProvider/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectNavTabStatus } from '../../ControlProvider/selector';
import { Avatar } from '../../../components/ComponentForms';
import { ItemChat, ItemContact } from '../../../components';
import iconAddFr from 'images/add-friend.svg';
import SearchForm from './SearchForm';
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

  render() {
    console.log(this.props);
    const { avatarUrl, fullName, navTabStatus } = this.props;

    return (
      <div className="side-bar-nav">
        <div className="control">
          <div className="user-info" >
            <Avatar src={avatarUrl} />
            <div className="user-name" >{fullName ? fullName : "User Name"}</div>
            <img className="icon-add-fr" src={iconAddFr} />
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
          navTabStatus && navTabStatus === TAB_CHAT &&
          <div className="list-chat" >
            <ItemChat />
          </div>
        }
        {
          navTabStatus && navTabStatus === TAB_CONTACT &&
          <div className="list-contact" >
            <ItemContact />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  navTabStatus: makeSelectNavTabStatus(),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTab: (status) => dispatch(onChangeTab(status)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(SideBarNav);