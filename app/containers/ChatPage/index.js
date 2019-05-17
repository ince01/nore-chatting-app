import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../authProvider/selector'
import { WelcomePage } from '../../components';
import SideBarNav from './SideBarNav';
import WindowChat from './windowChat';
import _ from 'lodash';
import './style.scss';

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isTabChat: true,
      // isTabContact: false,
    }
  }

  render() {
    const currentUser = _.get(this.props, "currentUser");
    // const { } = curentUser;
    return (
      <div className="chat-page">
        <SideBarNav
          currentUser={currentUser}
        />
        <div className="main-content">
          {/* <WelcomePage /> */}
          <WindowChat />
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps, null);

export default withConnect(ChatPage);
