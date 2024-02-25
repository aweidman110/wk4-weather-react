import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Weather />
    <small>
      <a
        href="https://github.com/aweidman110/wk4-weather-react"
        target="_blank"
      >
        Open-source code{" "}
      </a>
      by
      <a href="https://wk4-weather-react.netlify.app/"> Aika Weidman </a>
      from
      <a href="https://shecodes.io/"> She Codes</a>
    </small>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
