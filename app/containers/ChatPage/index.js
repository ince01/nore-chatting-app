import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../authProvider/selector'
import { getCurrentUser } from '../authProvider/actions'
import { WelcomePage } from '../../components';
import SideBarNav from './SideBarNav';
import WindowChat from './windowChat';
import _ from 'lodash';
import './style.scss';
import io from "socket.io-client";
import axios from 'axios';

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idFriendCurrent: -1,
      mess: {},
      listFriendRequest: []
    }
  }

  callAPI() {
    const instance = axios.create({
      baseURL: 'http://localhost:5000',
      responseType: 'json'
    });
    let sessionToken = localStorage.getItem('sessionToken');
    instance.defaults.headers.common['Authorization'] = `jwt ${sessionToken}`;
    return instance;
  }

  componentDidMount() {
    this.socket = io('localhost:5000?token=' + localStorage.getItem('sessionToken'));
    const app = this;
    this.socket.on('MESS', function (data) {
      app.addMessage(data);
    });
    this.socket.on('NEW_FRIEND', function (data) {
      app.props.getCurrentUser();
      app.getListFriendRequest();
    });
    this.socket.on('NEW_REQUEST', function (data) {
      app.getListFriendRequest();
    });
    this.getListFriendRequest();
  }

  getListFriendRequest() {
    const app = this;
    this.callAPI().post('/user/friendRequest')
      .then(function (response) {
        app.setState({
          listFriendRequest: response.data.result.map(i => {
            return i.from;
          })
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleAddFriend(user) {
    const app = this;
    this.callAPI().post('/user/addFriend', {
      to: user._id
    })
      .then(function (response) {
        app.socket.emit('FRIEND_REQUEST', {
          id: user._id
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  accectFriend(user) {
    const app = this;
    this.callAPI().post('/user/acceptFriend', {
      friendRequestId: user._id
    })
      .then(function (response) {
        app.socket.emit('FRIEND_ACCECPT', {
          id: user._id
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendMess(mess) {
    this.socket.emit('SEND_MESSAGE', {
      id: this.state.idFriendCurrent,
      mess: mess
    });
  }

  onChangeUserChatting(user) {
    if (user._id !== this.state.idFriendCurrent) {
      if (!this.state.mess[user._id] || this.state.mess[user._id].length === 0) {
        const app = this;
        this.callAPI().post('/messages', {
          id: user._id
        })
          .then(function (response) {
            const listMess = response.data.result.map(i => {
              return {
                type: i.type,
                value: i.content
              }
            })
            const messNew = app.state.mess;
            messNew[user._id] = listMess;
            app.setState({ mess: messNew });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      this.setState({ idFriendCurrent: user._id })
    }
  }

  addMessage(data) {
    let mess = this.state.mess;
    if (!mess[data.id]) {
      mess[data.id] = [];
    }
    if (mess[data.id] && mess[data.id].length > 0) {
      mess[data.id].push({
        type: data.type,
        value: data.mess
      })
      this.setState({ mess: mess });
    }
  };

  updateUser(user) {
    const app = this;
    if (user.fileAvatar) {
      const payload = new FormData();
      payload.append('file', user.fileAvatar);
      this.callAPI().post('upload', payload)
        .then(function (response) {
          user.avatarUrl = response.data.result.publicUrl;
          app.callAPIUpdateUser(user);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      this.callAPIUpdateUser(user);
    }
  }

  callAPIUpdateUser(user) {
    const app = this;
    this.callAPI().post('/user/update', {
      fullName: user.fullName,
      birthday: user.birthday,
      gender: user.gender,
      avatarUrl: user.avatarUrl
    })
      .then(function (response) {
        app.props.getCurrentUser();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const currentUser = _.get(this.props, "currentUser");
    return (
      <div className="chat-page">
        <SideBarNav
          listFriendRequest={this.state.listFriendRequest}
          idFriendCurrent={this.state.idFriendCurrent}
          currentUser={currentUser}
          accectFriend={(user) => { this.accectFriend(user) }}
          handleAddFriend={(user) => { this.handleAddFriend(user) }}
          onChangeUserChatting={(user) => this.onChangeUserChatting(user)}
          updateUser={(user) => this.updateUser(user)}
        />
        <div className="main-content">
          {
            this.state.idFriendCurrent === -1 ?
              <WelcomePage /> :
              <WindowChat idFriendCurrent={this.state.idFriendCurrent} mess={this.state.mess[this.state.idFriendCurrent]} sendMess={(mess) => this.sendMess(mess)} />
          }

        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentUser: () => dispatch(getCurrentUser()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(ChatPage);
