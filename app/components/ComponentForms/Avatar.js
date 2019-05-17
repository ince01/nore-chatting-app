import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Avatar extends Component {
  render() {
    const { src, online } = this.props;
    return (
      <div className="avatar">
        <Image src={src ? src : "https://img.icons8.com/cotton/36/000000/gender-neutral-user.png"} roundedCircle />
        {online && <span className="online" ></span>}
      </div>
    )
  }
}
export default Avatar
