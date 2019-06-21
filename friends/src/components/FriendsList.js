import React, { Component } from 'react';

import Friend from './Friend';

class FriendsList extends Component {
  removeFriend = id => {
    this.props.deleteFriend(this.props.endpoint, id);
  };

  render() {
    return (
      <section className="friends-list">
        {this.props.friends.map(f => <Friend
                                       key={f.id}
                                       {...f} 
                                       editFriend={this.props.editFriend}
                                       removeFriend={this.removeFriend} 
                                     />)}
      </section>
    );
  }
}

export default FriendsList;
