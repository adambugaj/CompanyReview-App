import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import validator from 'validator';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


// Header for every page
const Header = () => (
  <div>
    <h2>CR App</h2>
    <p>The big App is comming</p>
  </div>
)
// Component for main site
const MainPage = () => (
  <div>
    <button><Link to="/login">Log In</Link></button>
    <button><NavLink to="/create-company-review">Create</NavLink></button>
  </div>
)

// Component for login form
const LoginEntry = () => (
  <div>
    <h2>Log In</h2>
    <input placeholder="Username"></input>
    <input placeholder="Password"></input>
    <button><Link to="/">login</Link></button>
  </div>
)

// Component for creating new company review
const CreateReviewPage = () => (
  <p>Your form to fill</p>
)

// If a page does not exist, show the link to home page
const PageNotExisted = () => (
    <p>Page does not exist - let's go back to <Link to="/">home page</Link></p>
)


class CompanyReviewApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/login" component={LoginEntry} />
            <Route path="/create-company-review" component={CreateReviewPage} />
            <Route component={PageNotExisted} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

// Render App
ReactDOM.render(<CompanyReviewApp />, document.getElementById('app'));
