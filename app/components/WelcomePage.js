import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class WelcomePage extends Component {
  render() {
    return (
      <>
        <h1 className="title" >Welcome, User Name</h1>
        <Avatar className="avatar-welcome-page" />
      </>
    )
  }
}

export default WelcomePage