import './scss/style.css';

import NavBar from './components/NavBar/NavBar'
import Products from './components/Products';
import HomePage from './components/HomePage';
import ItemDetailContainer from './components/Items/ItemDetailContainer';

import React from 'react';
import { ToastContainer} from 'react-toastify';
// https://fkhadra.github.io/react-toastify/introduction

import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>
  );
}

export default App;

