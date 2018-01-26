import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { addReview } from '../../actions/review-generators';

const CreateReviewPage = (props) => {
  return (
    <div>
      <h1>Review Company Form</h1>
      <ReviewForm
        onSubmit={(review) => {
          console.log(review);
          props.dispatch(addReview({review}))
          props.history.push('/');
          console.log(props.expense);
        }}

      />
    </div>
  );
};

export default connect()(CreateReviewPage);
