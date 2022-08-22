import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/style.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOb2qnHkr88hPK_GUzlxZ4fqwAqyttVNE",
  authDomain: "fullcup-74ea5.firebaseapp.com",
  projectId: "fullcup-74ea5",
  storageBucket: "fullcup-74ea5.appspot.com",
  messagingSenderId: "108073132056",
  appId: "1:108073132056:web:7e7a6226083701bc89636d"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAsCU50EsJH-87gUucmA1fBKO1cRenFB0w",
//   authDomain: "fullcup-e6747.firebaseapp.com",
//   projectId: "fullcup-e6747",
//   storageBucket: "fullcup-e6747.appspot.com",
//   messagingSenderId: "958167874068",
//   appId: "1:958167874068:web:00612b3956a99cd65e4501"
// };

// eslint-disable-next-line 
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
