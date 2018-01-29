import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../reducers/reviewReducer';
import ReviewForm from './ReviewForm';

const RemoveReview = (props) => {

  return (
    <div>
      <button onClick={ () => {
        console.log(props.review);
        props.dispatch(removeReview({ companyName: '1' }));
      }}>Remove
      </button>
    </div>
  )
}


export default connect()(RemoveReview);
