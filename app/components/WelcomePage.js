import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page" >
        <h1 className="title" >{`Welcome, ${this.props.fullName}`}</h1>
        <div className="avatar-welcome-page">
          <Avatar src={this.props.avatarUrl} />
        </div>
      </div>
    )
  }
}

export default WelcomePage