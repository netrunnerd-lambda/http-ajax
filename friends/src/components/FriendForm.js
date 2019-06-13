import axios from 'axios';
import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';

class FriendForm extends Component {
  state = {
    friendName: '',
    friendAge: '',
    friendEmail: '',
    editing: false,
    endpoint: 'http://localhost:5000/friends',
    updated: false,
    url: this.props.match.url
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = (url, o) => {
    axios.post(url, o);
  };

  getFriend = url => {
    axios.get(url)
      .then(r => {
        const friend = r.data.find(f => `${f.id}` === this.props.match.params.id);
        this.setState({
          friendName: friend.name,
          friendAge: friend.age,
          friendEmail: friend.email
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = (url, o) => {
    const id = this.props.match.params.id;

    axios.put(`${url}/${id}`, o);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { friendName,
            friendAge,
            friendEmail,
            url } = this.state;

    const friend = {
      name: friendName,
      age: friendAge,
      email: friendEmail
    };
    
    if (!friendName || !friendAge || !friendEmail)
      return;

    if (url === "/add") {
      this.addFriend(this.state.endpoint, friend);
      this.setState({ friendName: '', friendAge: '', friendEmail: '' });
    } else {
      this.updateFriend(this.state.endpoint, friend);
      this.setState({ updated: true });
      this.props.setTimeout(_ => this.setState({ updated: false }), 4200);
    }
  };

  componentDidMount() {
    if (this.state.url.includes("/edit")) {
      this.setState({ editing: true });
      this.getFriend(this.state.endpoint);
    }
  }

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
          {`${this.state.editing ? 'update' : 'add'} friend`}
        </button>
        {this.state.updated && <p>information updated</p>}
      </form>
    );
  }
}

export default ReactTimeout(FriendForm);
