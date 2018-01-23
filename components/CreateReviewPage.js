import React from 'react';
import { Link } from 'react-router-dom';

// Component for creating new company review
const CreateReviewPage = () => {
  return (
    <div>
      <p>Your form to fill</p>
      <input type="text" placeholder="Question"></input>
      <input type="text" placeholder="Question"></input>
      <input type="text" placeholder="Question"></input>
      <input type="text" placeholder="Question"></input>
      <button><Link to="/">Save and go back</Link></button>
    </div>
  );
};

export default CreateReviewPage;
