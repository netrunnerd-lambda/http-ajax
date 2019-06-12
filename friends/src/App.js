import axios from 'axios';
import React, { Component } from 'react';

import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
    name: "Wick"
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(r => this.setState({ friends: r.data }))
      .catch(err => console.log(Date.now(), err));
  }

  render() {
    return (
      <>
        <h1 className="main">{this.state.name}'s Friends List</h1>
        <FriendsList friends={this.state.friends} />
      </>
    );
  }
}

export default App;
