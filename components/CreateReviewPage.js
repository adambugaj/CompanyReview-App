import React from 'react';
import { Link } from 'react-router-dom';

// Component for creating new company review
const CreateReviewPage = () => {
  return (
    <div>
      <p>Your form to fill</p>
      <input key="1" placeholder="Question"></input>
      <input key="2" placeholder="Question"></input>
      <input key="3" placeholder="Question"></input>
      <input key="4" placeholder="Question"></input>
      <button><Link to="/">Save and go back</Link></button>
    </div>
  );
};

export default CreateReviewPage;
