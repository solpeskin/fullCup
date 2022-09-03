import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut';
import Nosotros from './components/Nosotros';

import CartProvider from './context/CartContext';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ToastContainer hideProgressBar position="top-center" toastId="toast-item-count" autoClose={3000} newestOnTop/>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/products' element={<ItemListContainer/>}/>
            <Route exact path='/products/:category'  element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/us" element={<Nosotros/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/checkout" element={<CheckOut/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

