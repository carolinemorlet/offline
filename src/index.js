import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

import { createStore } from 'redux';

import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './redux/reducers';

import './css/index.css';
import './css/grid.css';
import './css/theme.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reducers/index.js';

document.title = 'GxP Manager';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
