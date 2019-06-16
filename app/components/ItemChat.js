import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import './style.scss';

class ItemChat extends Component {
  render() {
    return (
      <>
        <div className={this.props.active ? "active item" : "item"} onClick={this.props.onClick}>
          <Avatar src={this.props.user.avatarUrl} />
          <div className="item-info" >
            <div className="name" > {this.props.user.fullName} </div>
            <div className="content" > the last message </div>
          </div>
          <div className="item-descr" >3/38/2019</div>
        </div>
      </>
    )
  }
}

export default ItemChat