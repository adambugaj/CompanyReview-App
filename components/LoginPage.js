import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

// Component for login form
class LoginPage extends React.Component {
constructor(props) {
  super(props);
  //this object will help us to set up a sign in component
  this.usernameTest = {
    username: 'user',
    password: 'test'
  }
  // Object for test username and password
  this.state = {
      username: this.usernameTest.username,
      password: this.usernameTest.password,
      checkUsername: '',
      checkPassword: '',
      registerInfo: ''
    };
  }

  // Save username in the object
  onUsernameChange = (e) => {
    const getUsername = e.target.value;
    this.setState(() => ({ checkUsername: getUsername }));
  };
  // Save password in the object
  onPasswordChange = (e) => {
    const getPassword = e.target.value;
    this.setState(() => ({ checkPassword: getPassword }));
  };

  onSubmit = (e) => {
    console.log(this.state.username);
    e.preventDefault();
    console.log(!this.state.checkPassword);
    // Check if empty and show message
    if (!this.state.checkUsername || !this.state.checkPassword) {
    this.setState(() => ({registerInfo: 'Please type a username and password'}));
  } // Push to main page if username and pass is correct
   else if (this.state.checkUsername === this.state.username && this.state.checkPassword === this.state.password) {
    this.setState(() => ({registerInfo: 'Login Succeesful'}));
    setTimeout(() => {
    this.props.history.push(`/dashboard/${this.state.username}`);
  }, 800)
  } // Check if wrong and show message
  else {
    this.setState(() => ({registerInfo: 'Wrong username or password'}));
  }
  };

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.onSubmit}>
        <input placeholder="Username: user" autoFocus onChange={this.onUsernameChange}/>
        <input type="password" placeholder="Password: test" onChange={this.onPasswordChange}/>
        <button>Login</button>
        {
          this.state.registerInfo &&
          <p>{this.state.registerInfo}</p>
        }
        </form>
        <p> Test it </p>
        <Link to="/">Test</Link>
      </div>
    );
  }
}


export default LoginPage;
