import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../authProvider/selector'
import { WelcomePage } from '../../components';
import SideBarNav from './SideBarNav';
import WindowChat from './windowChat';
import _ from 'lodash';
import './style.scss';
import io from "socket.io-client";

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isTabChat: true,
      // isTabContact: false,
      indexUserChatting: 0,
      mess: {}
    }
  }

  componentDidMount() {
    this.socket = io('localhost:5000?token=' + localStorage.getItem('sessionToken'));
    const app = this;
    this.socket.on('MESS', function (data) {
      app.addMessage(data);
    });
  }

  sendMess(mess) {
    this.socket.emit('SEND_MESSAGE', {
      id: this.props.currentUser.friends[this.state.indexUserChatting]._id,
      mess: mess
    });
    this.setState({ message: '' });
  }

  addMessage(data) {
    let mess = this.state.mess;
    if (!mess[data.id]) {
      mess[data.id] = [];
    }
    mess[data.id].push({
      type: data.type,
      value: data.mess
    })
    this.setState({ mess: mess });
    console.log(mess);
    console.log(this.state.mess);
  };

  render() {
    const currentUser = _.get(this.props, "currentUser");
    // const { } = curentUser;
    return (
      <div className="chat-page">
        <SideBarNav
          indexUserCurrent={this.state.indexUserChatting}
          currentUser={currentUser}
          onChangeUserChatting={(index) => { index !== this.state.indexUserChatting && this.setState({ indexUserChatting: index }) }}
        />
        <div className="main-content">
          {/* <WelcomePage /> */}
          <WindowChat indexUserChatting={this.state.indexUserChatting} mess={this.state.mess[currentUser.friends[this.state.indexUserChatting]._id]} sendMess={(mess) => this.sendMess(mess)} />
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
