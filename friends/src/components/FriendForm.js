import axios from 'axios';
import React, { Component } from 'react';

class FriendForm extends Component {
  state = {
    friendName: '',
    friendAge: '',
    friendEmail: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail
    }).then(r => this.props.updateFriends(r.data))
      .catch(err => console.log(err));
    this.setState({ friendName: '', friendAge: '', friendEmail: '' });
  };

  render() {
    return (
      <form className="friend-form" onSubmit={this.handleSubmit}>
        <input 
          className="fname"
          name="friendName" 
          onChange={this.handleChange}
          placeholder="Name"
          type="text" 
          value={this.state.friendName}
        />
        <input
          className="fage"
          name="friendAge"
          onChange={this.handleChange}
          placeholder="Age"
          type="number"
          value={this.state.friendAge}
        />
        <input
          className="femail"
          name="friendEmail"
          onChange={this.handleChange}
          placeholder="Email"
          type="email"
          value={this.state.friendEmail}
        />
        <button type="submit">
          add friend
        </button>
      </form>
    );
  }
}

export default FriendForm;
