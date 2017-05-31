import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import './assets/_assets.js';

import { Popular } from './components/popular';

ReactDOM.render(
  <div className="container">
    <Popular />
  </div>,
  document.getElementById('app')
);
