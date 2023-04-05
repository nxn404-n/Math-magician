import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';
import './index.css';
import Quote from './components/Quote';
import Fullweb from './components/Fullweb';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Fullweb />}>
        <Route index element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
