// Deafult state for reviewReducer function
const reviewReducerDefaultState = [];
// Make a right choice by providing a user data, state = object/data
const reviewReducer = (state = reviewReducerDefaultState, action) => {
  console.log(action.review);
  switch(action.type) {
    case 'ADD_REVIEW':
      console.log(action.review);
      return [
        ...state,
        action.review
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((review) => {
        console.log(review.companyName);
        return review.companyName !== action.companyName;
      });
    default:
      return state;
  }
};

export default reviewReducer;
