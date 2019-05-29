import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemContact extends Component {
  render() {
    const { name, avatarUrl } = this.props;
    return (
      <>
        <div className="item" >
          <Avatar src={avatarUrl} />
          <div className="name" >{name}</div>
        </div>
      </>
    )
  }
}

export default ItemContact