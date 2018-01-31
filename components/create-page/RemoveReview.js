import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import ReviewForm from './ReviewForm';


const RemoveReview = (props) => {
  // onRemoveReview = (e) => {
  //   props.dispatch(removeReview({companyName: 'Capgemini'}));
  // }
  return (
    <div>
      <button onClick={this.onRemoveReview}>Remove
      </button>
    </div>
  )
}



export default connect()(RemoveReview);
