import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import "./styles.scss";

import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)