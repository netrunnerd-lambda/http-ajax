import axios from 'axios';
import React, { Component } from 'react';

import Friend from './Friend';

class FriendsList extends Component {
  state = {
    friends: []
  };

  removeFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(r => this.setState({ friends: r.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(r => this.setState({ friends: r.data }))
      .catch(err => console.log(err));
  }

  render() {
    const friends = this.state.friends,
          removeFriend = this.removeFriend;

    return (
      <section className="friends-list">
        {friends.map(f => <Friend key={f.id} {...f} removeFriend={removeFriend} />)}
      </section>
    );
  }
}

export default FriendsList;
