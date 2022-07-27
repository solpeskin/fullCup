import './scss/style.css';

import NavBar from './components/NavBar/NavBar'
import Products from './components/Products';
import HomePage from './components/HomePage';
import Introduction from './components/Introduction';

import React from 'react';
import { ToastContainer} from 'react-toastify';
// https://fkhadra.github.io/react-toastify/introduction

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />

      <HomePage/>
      <Introduction/>
      <NavBar/>
      <Products/> 
      
    </div>
  );
}

export default App;

