import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './GlobalStyle';
import { Login } from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);
