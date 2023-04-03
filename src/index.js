import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from 'redux';

const initial = {
  lottos:[]
}

function reducer(state=initial, action){
  switch(action.type){
    case 'add' :
      return{
        lottos: [action.payload]
      };
    default: return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


