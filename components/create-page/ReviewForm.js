import React from 'react';
import { Link } from 'react-router-dom';

// Component for creating new company review
class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  // Object for storing answers
    this.state = {
      companyName: props.review ? props.review.companyName : 'Capgemini',
      q1: props.review ? props.review.q1 : '',
      q2: props.review ? props.review.q2 : '',
      q3: '',
      q4: '',
      q5: '',
      shortNote: ''
    };
  };

  // Functions to handle every question in a review form
  onCompanyName = (e) => {
    const getCompanyName = e.target.value;
    this.setState(() => ({companyName: getCompanyName}));
  }

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
  // From create review page
  onSubmit = (e) => {
    console.log(this.state.q1);
    e.preventDefault();
    this.props.onSubmit({
      companyName: this.state.companyName,
      q1:this.state.q1,
      q2:this.state.q2,
      q3:this.state.q3,
      q4:this.state.q4,
      q5:this.state.q5,
      shortNote: this.state.shortNote

    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>Company Name</p>
          <input
            type="text"
            placeholder="Question"
            autoFocus
            value={this.state.companyName}
            onChange={this.onCompanyName}
          />
          <p>Number of home-office days</p>
          <input
            type="text"
            placeholder="Question"
            value={this.state.q1}
            onChange={this.onChangeQ1}
          />
          <p>Days for learning</p>
          <input
            type="text"
            placeholder="Question"
            value={this.state.q2}
            onChange={this.onChangeQ2}
          />
          <p>Wage amount</p>
          <input
            type="number"
            placeholder="Provide a number"
            value={this.state.q5}
            onChange={this.onChangeQ5}
          />
          <p>Brief note</p>
          <textarea
            placeholder="Type down what you think"
            value={this.state.note}
            onChange={this.onChangeNote}
          >
          </textarea>
          <p>Review Score: {this.state.shortNote}</p>
          <button>Save and go back</button>
        </form>
      </div>
    );
  }
};

export default ReviewForm;
