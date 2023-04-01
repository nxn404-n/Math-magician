import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';
import './index.css';
import Quote from './components/Quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <Quote />
  </React.StrictMode>,
);
