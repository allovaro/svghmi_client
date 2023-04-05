import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import { BASE_TITLE } from './config/constant';
import './index.css';
import { store } from './store';

document.title = `${BASE_TITLE} | Tool for creating dynamic WinCC Unified widgets`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
