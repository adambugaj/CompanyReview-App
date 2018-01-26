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
        { props.review.map((rev) => {
          return <ReviewList key={rev.q1 + Math.random()}{...rev} />
        })}
        <ReviewList/>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
      name: 'Adam',
      status: 'Win!',
      review: state.review
    };
  }


export default connect(mapStateToProps)(MainPage);
