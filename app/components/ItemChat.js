import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemChat extends Component {
  render() {
    return (
      <>
        <div className="item" >
          <Avatar />
          <div className="item-info" >
            <div className="name" > User Name </div>
            <div className="content" > the last message </div>
          </div>
          <div className="item-descr" >3/38/2019</div>
        </div>
      </>
    )
  }
}

export default ItemChat