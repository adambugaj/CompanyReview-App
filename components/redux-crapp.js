import { createStore, combineReducers } from 'redux';

// Setting up an object and constructor
const addReview = ({
  q1 = '',
  q2 = '',
  q3 = '',
  q4 = ''
} = {}
) => ({
  type: "ADD_REVIEW",
  review: {
    q1,
    q2,
    q3,
    q4
  }
});

const reviewReducerDefaultState = [];
const reviewReducer = (state = reviewReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_REVIEW':
      return [
        ...state,
        action.review
      ];
    default:
      return state;
  }
};

// Store creation - stores function
const store = createStore(
  combineReducers({
    review: reviewReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

const firstReview = store.dispatch(addReview({
  q1: '1',
  q2: '2'
}));

const secondReview = store.dispatch(addReview({
  q3: '3'
}));
