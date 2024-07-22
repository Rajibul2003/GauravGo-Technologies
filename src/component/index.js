// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global styles you have
import App from './App'; // Import your main App component
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure there's an element with id 'root' in public/index.html
);
