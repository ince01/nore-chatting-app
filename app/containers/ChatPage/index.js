import React, { Component } from 'react';
import { Avatar, Searchfields } from '../../components/ComponentForms';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

class ChatPage extends Component {
  render() {
    return (
      <div className="chat-page">
        <div className="side-bar-nav">
          <div className="user-info" >
            <Avatar />
            <div className="user-name" >User Name</div>
          </div>
        </div>
        <div className="main-content">


        </div>
      </div>
    )
  }
}

export default ChatPage