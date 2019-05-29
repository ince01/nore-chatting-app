import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemContact extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="item" >
          <Avatar />
          <div className="name" > {name || "User Name"} </div>
        </div>
      </>
    )
  }
}

export default ItemContact