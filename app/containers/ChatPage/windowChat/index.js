import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from '../../authProvider/selector'
import { Avatar } from '../../../components/ComponentForms';
// import EmojiPicker from 'emoji-picker-react';
import 'emoji-picker-react/dist/universal/style.scss';
import './style.scss';

class WindowChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messSend: '',
      mess: []
    }
  }

  getMessCurrent(userChat, listMess) {
    let mess = []
    listMess.forEach(item => {
      if (userChat._id === item.id) {
        mess = item.mess;
        return;
      }
    });
    return mess;
  }

  avatar(img) {
    return (
      <img className='avatar' src={img} />
    )
  }

  messView(user, mess, type) {
    return (
      <div className={type + ' mess'}>
        <img src={user.avatarUrl} />
        <p>{mess}</p>
      </div>
    )
  }

  render() {
    const currentUser = _.get(this.props, "currentUser");
    const userChat = currentUser.friends[this.props.indexUserChatting];
    return (
      <>
        <div className="header">
          <div className="info-fr" >
            <h4>{userChat ? userChat.fullName : ''}</h4>
            <div className="status-fr" >User status</div>
          </div>
          <Avatar />
        </div>
        <div className="message-container" >
          <div className="messages">
            {this.props.mess &&
              this.props.mess.map((i, index) => {
                return i.type === 1 ? this.messView(currentUser, i.value, 'right') : this.messView(userChat, i.value, 'left');
              })
            }
          </div>
          <div className="type-control">
            {/* <EmojiPicker preload onEmojiClick={(emoji, xx, yy) => { alert(emoji) }} /> */}
            <textarea rows="1" cols="50" style={{ height: "60px" }} value={this.state.messSend} placeholder="Type a message..." onChange={(e) => { this.setState({ messSend: e.target.value }) }} />
            <button onClick={() => { this.setState({ messSend: '' }); this.props.sendMess(this.state.messSend) }}>send</button>
          </div>

        </div>
      </>
    )
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(mapStateToProps, null);
export default withConnect(WindowChat)