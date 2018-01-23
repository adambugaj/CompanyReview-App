import React from 'react';
import { Link } from 'react-router-dom';

// Component for creating new company review
class ReviewForm extends React.Component {
  // Object for storing answers
  state = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    shortNote: ''
  };

  // Functions to handle every question in a review form
  onChangeQ1 = (e) => {
    const getQ1 = e.target.value;
    this.setState(() => ({ q1: getQ1 }));
  };

  onChangeQ2 = (e) => {
    const getQ2 = e.target.value;
    this.setState(() => ({ q2: getQ2 }));
  };

  onChangeQ3 = (e) => {
    const getQ3 = e.target.value;
    this.setState(() => ({ q3: getQ3 }));
  };

  onChangeQ4 = (e) => {
    const getQ4 = e.target.value;
    this.setState(() => ({ q4: getQ4 }));
  };

  onChangeQ5 = (e) => {
    const getQ5 = e.target.value;
    this.setState(() => ({ q5: getQ5 }));
  };

  onChangeNote = (e) => {
    const getNote = e.target.value;
    this.setState(() => ({ shortNote: getNote }));
  };

  render() {
    return (
      <div>
        <form>
          <p>Number of home-office days</p>
          <input
            type="text"
            placeholder="Question"
            autoFocus
            value={this.state.q1}
            onChange={this.onChangeQ1}
          />
          <p>Number of days for learning</p>
          <input
            type="text"
            placeholder="Question"
            value={this.state.q2}
            onChange={this.onChangeQ2}
          />
          <p>English required</p>
          <input
            type="text"
            placeholder="Question"
            value={this.state.q3}
            onChange={this.onChangeQ3}
          />
          <p>German required</p>
          <input
            type="text"
            placeholder="Question"
            value={this.state.q4}
            onChange={this.onChangeQ4}
          />
          <p>Wage amount</p>
          <input
            type="number"
            placeholder="Provide a number"
            value={this.state.q5}
            onChange={this.onChangeQ5}
          />
          <textarea
            placeholder="Type down what you think"
            value={this.state.note}
            onChange={this.onChangeNote}
          >
          </textarea>
          <p>Review Score: {this.state.shortNote}</p>
          <button><Link to="/">Save and go back</Link></button>
        </form>
      </div>
    );
  }
};
export default ReviewForm;
