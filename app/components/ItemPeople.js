import React, { Component } from 'react';
import { Avatar } from './ComponentForms';
import { Button } from 'react-bootstrap';
import './style.scss';

class ItemPeople extends Component {
  render() {
    const {
      id,
      name,
      avatarUrl,
      relationshipStatus,
      handleAddFriend,
      handleConfirm
    } = this.props;

    return (
      <div className="item" >
        <div className="name-avatar">
          <Avatar src={avatarUrl} />
          <div className="name" > {name || "User Name"} </div>
        </div>
        {relationshipStatus && !relationshipStatus.accepted && id === relationshipStatus.from &&
          <Button onClick={handleConfirm} > Confirm </Button>}
        {relationshipStatus && !relationshipStatus.accepted && id === relationshipStatus.to &&
          <Button disabled> Requested </Button>}
        {!relationshipStatus &&
          <Button onClick={handleAddFriend}> Add </Button>}
      </div>
    )
  }
}

export default ItemPeople