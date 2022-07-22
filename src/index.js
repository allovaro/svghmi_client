import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BASE_TITLE } from './config/constant';

import './index.css';

document.title = `${BASE_TITLE} | Professional Engineering Tool`;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
