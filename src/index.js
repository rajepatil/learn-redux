import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

//store -> global state

//action => simple function return object

const increment = () =>
{
  return {
    type: 'INCREMENT'
  }
}

const decrement = () =>
{
  return {
    type: 'DECREMENT'
  }
}

const reset = () =>
{
  return {
    type: 'RESET'
  }
}

//reducer

const counter = (state = 0, action) =>
{
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case 'RESET':
      return state = 0;
  }
}

let store = createStore(counter);

//display in console

store.subscribe(() =>
{
  console.log(store.getState())
})

//dispatch

store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
