/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './GlobalCSS/global.css';
import GlobalRouters from './Routes/GlobalRoutes';
import { Toaster } from 'react-hot-toast';
import { ToastProvider } from './Contexts/ToastContext';
import { TaskProvider } from './Contexts/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <TaskProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2500,
            style: {
              transitionDuration: '1000ms',
            },
            maxToasts: 2,
          }}
        />
        <GlobalRouters />
      </TaskProvider>
    </ToastProvider>
  </React.StrictMode>,
);
