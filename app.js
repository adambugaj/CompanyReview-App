// Remember default export without {}, not defualt within {}
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addReview } from './actions/review-generators';
import CRAppRouter from './routers/CRAppRouter';
import configureStore from './store/configureStore';
import { removeReview } from './actions/review-generators';

const store = configureStore();

store.dispatch(addReview({ companyName: 'Symphony Solution', q1: 'nice', q2: 'super'}));
const state = store.getState();
console.log(state);

store.dispatch(removeReview({companyName:'Symphony Solution'}));

// Very important part to connect Provider with store!
const jsx = (
  <Provider store={store}>
    <CRAppRouter/>
  </Provider>
)

// Render App
ReactDOM.render(jsx, document.getElementById('app'));
