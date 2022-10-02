import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { BASE_TITLE } from './config/constant';
import './index.css';
import { store } from './store';


document.title = `${BASE_TITLE} | Professional Engineering Tool for WinCC Unified widgets`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
