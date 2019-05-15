import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Avatar extends Component {
  render() {
    const { online } = this.props;
    return (
      <div className="avatar">
        <Image src="https://img.mobiscroll.com/demos/Requiem_for_a_Dream.png" roundedCircle />
        <span className={online && "online"} ></span>
      </div>
    )
  }
}
export default Avatar
