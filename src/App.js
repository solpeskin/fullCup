import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';
import Cart from './components/Cart/Cart';

import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/products' element={<ItemListContainer/>}/>
              <Route exact path='/products/:category'  element={<ItemListContainer/>}/>
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>
  );
}

export default App;

