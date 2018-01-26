import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewList from './create-page/ReviewList'

// Component for main site
const MainPage = (props) => {
  console.log(props.review);
    return (
      <div>
        <button><Link to="/login">Log In</Link></button>
        <button><Link to="/create-company-review">Create</Link></button>
        <ReviewList/>
      </div>
    )
  } //Check why it does not show up on main page when we save questions!

const mapStateToProps = (state) => {
  console.log(state);
  return {
    review: state.reviewReducer
  };
}

export default connect(mapStateToProps)(MainPage);
