import axios from 'axios';
import React, { Component } from 'react';

class FriendsList extends Component {
  renderFriend(friend) {
    const { name, age, email } = friend;

    return (
      <div className="friend">
        <h2>{name} ({age})</h2>
        <h3>{email}</h3>
      </div>
    );
  }

  render() {
    const friends = this.props.friends,
          renderFriend = this.renderFriend;

    return (
      <section className="friends-list">
        {friends.map(f => renderFriend(f))}
      </section>
    );
  }
}

export default FriendsList;
