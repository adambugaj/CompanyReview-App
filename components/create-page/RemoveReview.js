import React from 'react';
import { connect } from 'react-redux';
import { removeReview } from '../../actions/review-generators';
import ReviewForm from './ReviewForm';


const RemoveReview = (props) => {
  return (
    <div>
      <button onClick={ () => {
        const getCompanyName = prompt('Type the company name you want to remove');
        props.dispatch(removeReview({companyName: getCompanyName}));
      }}>Remove
      </button>
    </div>
  )
}


export default connect()(RemoveReview);
