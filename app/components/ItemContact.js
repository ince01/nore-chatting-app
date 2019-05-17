import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemContact extends Component {
  render() {
    return (
      <>
        <div className="item" >
          <Avatar />
          <div className="name" > User Name </div>
        </div>
      </>
    )
  }
}

export default ItemContact