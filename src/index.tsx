import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreContext } from './contexts/StoreContext';
import './utils/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext>
      <App />
    </StoreContext>
  </React.StrictMode>
);
