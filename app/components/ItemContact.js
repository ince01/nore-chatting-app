import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemContact extends Component {
  render() {
    const { fullName, avatarUrl } = this.props.user;
    return (
      <>
        <div className={this.props.active ? "active item" : "item"} onClick={this.props.onClick} >
          <Avatar src={avatarUrl} />
          <div className="name" > {fullName} </div>
        </div>
      </>
    )
  }
}

export default ItemContact