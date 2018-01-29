import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addReview } from './actions/review-generators';
import CRAppRouter from './routers/CRAppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(addReview({ companyName: 'great', q1: 'nice', q2: 'super'}));
store.dispatch(addReview({ companyName: '1', q1: '2', q2: '3'}));
const state = store.getState();
console.log(state);

// Very important part to connect Provider with store!
const jsx = (
  <Provider store={store}>
    <CRAppRouter/>
  </Provider>
)

// Render App
ReactDOM.render(jsx, document.getElementById('app'));
