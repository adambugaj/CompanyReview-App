import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component for login form
const LoginPage = () => (
  <div>
    <h2>Log In</h2>
    <input placeholder="Username"></input>
    <input placeholder="Password"></input>
    <button><Link to="/">login</Link></button>
  </div>
)

export default LoginPage;
