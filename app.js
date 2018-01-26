import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addReview } from './actions/review-generators';
import CRAppRouter from './routers/CRAppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch(addReview({ companyName: 'great', q1: 'nice', q2: 'super'}));

const state = store.getState();
console.log(state);


const jsx = (
  <Provider store={store}>
    <CRAppRouter/>
  </Provider>
)

// Render App
ReactDOM.render(jsx, document.getElementById('app'));
