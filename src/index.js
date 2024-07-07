/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './GlobalCSS/global.css';
import GlobalRouters from './Routes/GlobalRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalRouters />
  </React.StrictMode>,
);
