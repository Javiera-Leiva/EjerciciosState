import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ejercicio2 from './Ejercicio2';
import Ejercicio3 from './Ejercicio3';
import Ejercicio4 from './Ejercicio4';
import Ejercicio5 from './Ejercicio5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br />
    <br />
    <Ejercicio2 />
    <br />
    <br />
    <Ejercicio3 />
    <br />
    <br />
    <Ejercicio4 />
    <br />
    <br />
    <Ejercicio5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
