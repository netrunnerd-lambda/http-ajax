import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactTimeout from 'react-timeout';

class FriendForm extends Component {
  state = {
    editing: false,
    friend: this.props.toUpdate || {
      name: '',
      age: '',
      email: ''
    },
    redirect: false,
    updated: false
  };

  addFriend = _ => {
    this.props.addFriend(this.props.endpoint, {
      ...this.state.friend
    });
  };

  updateFriend = _ => {
    const url = `${this.props.endpoint}/${this.props.match.params.id}`;

    this.props.updateFriend(url, {
      ...this.state.friend
    });

    this.setState({ updated: true });
  };

  handleChange = e => {
    const friend = {
      ...this.state.friend,
      [e.target.name]: e.target.value
    };

    this.setState({ friend });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, email } = this.state.friend;

    if (!name || !age || !email)
      return;

    if (this.state.editing)
      this.updateFriend();
    else
      this.addFriend();

    this.setState({ friend: {
      name: '',
      age: '',
      email: ''
    }});

    this.props.setTimeout(_ => this.setState({ redirect: !this.state.redirect }), 1000);
  };

  componentDidMount() {
    if (this.props.toUpdate)
      this.setState({ editing: !this.state.editing });
  }

  render() {
    if (this.state.redirect)
      return <Redirect to="/" />

    return (
      <form className="friend-form" onSubmit={this.handleSubmit}>
        <input 
          className="fname"
          name="name" 
          onChange={this.handleChange}
          placeholder="Name"
          type="text" 
          value={this.state.friend.name}
        />
        <input
          className="fage"
          name="age"
          onChange={this.handleChange}
          placeholder="Age"
          type="number"
          value={this.state.friend.age}
        />
        <input
          className="femail"
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
          type="email"
          value={this.state.friend.email}
        />
        <button type="submit">
          {this.state.editing ? 'UPDATE' : 'ADD'}
        </button>
        {this.state.updated && <p>information updated</p>}
      </form>
    );
  }
}

export default ReactTimeout(FriendForm);
