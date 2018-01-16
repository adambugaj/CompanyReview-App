import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import validator from 'validator';
import { BrowserRouter, Route } from 'react-router-dom';

// Component for main site
const MainPage = () => (
  <div>
    <h2>The big App is comming</h2>
    <p>This works perfectly good, oww yeah!</p>
  </div>
)

// Component for login form
const LoginEntry = () => (
  <h2>Log In</h2>
)

class CompanyReviewApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/login" component={LoginEntry} />
        </div>
      </BrowserRouter>
    );
  }
}

// Render App
ReactDOM.render(<CompanyReviewApp />, document.getElementById('app'));
