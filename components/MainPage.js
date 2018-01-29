import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReviewList from './create-page/ReviewList'
import UserDashboard from '.././components/dashboard/UserDashboard';

// Component for main site
const MainPage = (props) => {
            console.log(props.review);
    return (
      <div>
        <button><Link to="/login">Log In</Link></button>
        <button><Link to="/login">Sign In</Link></button>
        <button><Link to="/create-company-review">Create</Link></button>
        <h1>{}sfdsd</h1>
        { props.review.map((rev) => {
          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
        })}
        <ReviewList/>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      name: 'Adam',
      review: state.reviewReducer
    };
  }


export default connect(mapStateToProps)(MainPage);
