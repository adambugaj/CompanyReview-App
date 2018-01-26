import React from 'react';

const ReviewList = ({companyName, q1}) => {
  console.log(q1);
  return (
    <div>
      <h2>{companyName}</h2>
      <p>{q1}</p>
    </div>
  )
}

export default ReviewList;
