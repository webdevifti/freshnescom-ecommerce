import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Context from './context/Context';
import './index.scss';


ReactDOM.render(
  <BrowserRouter>
    <Context />
  </BrowserRouter>,
  document.getElementById('root')
);
