import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import GlobalStyles from 'global/GlobalStyles';
import 'modern-normalize/modern-normalize.css';

// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Roboto:wght@400;500;700;900&display=swap"
      rel="stylesheet"
    />

    <GlobalStyles />
    <App />
  </React.StrictMode>
);
