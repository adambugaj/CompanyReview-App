import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component for main site
const MainPage = () => (
  <div>
    <button><Link to="/login">Log In</Link></button>
    <button><NavLink to="/create-company-review">Create</NavLink></button>
  </div>
)

export default MainPage;
