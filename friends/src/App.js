import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    surname: "Wick"
  };

  render() {
    const name = this.state.surname;

    return (
      <>
        <h1 className="main">{`${name}'s Friends List`}</h1>
        <nav className="nav">
          <NavLink to="/add">Add Friend</NavLink>
          <NavLink to="/">Friends List</NavLink>
        </nav>
        <Route exact component={FriendsList} path="/" />
      </>
    );
  }
}

export default App;
