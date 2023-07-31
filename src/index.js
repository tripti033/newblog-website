import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
