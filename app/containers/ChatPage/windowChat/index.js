import React, { Component, } from 'react';
import { Avatar } from '../../../components/ComponentForms';
import EmojiPicker from 'emoji-picker-react';
import 'emoji-picker-react/dist/universal/style.scss';
import './style.scss';

class WindowChat extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="info-fr" >
            <h4>User Name</h4>
            <div className="status-fr" >User status</div>
          </div>
          <Avatar />
        </div>
        <div className="message-container" >
          <div className="messages">
            a
          </div>
          <div className="type-control">
            {/* <EmojiPicker onEmojiClick={() => { }} /> */}
            <textarea rows="1" cols="50" style={{ height: "60px" }} placeholder="Type a message..." />
          </div>

        </div>
      </>
    )
  }
}

export default WindowChat