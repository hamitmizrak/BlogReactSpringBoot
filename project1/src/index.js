import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <React.Fragment>
        <App />
    </React.Fragment>
  </React.StrictMode>
);

reportWebVitals();
