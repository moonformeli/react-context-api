import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import CardProvider from './providers/CardProvider';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CardProvider>
        <App />
      </CardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
