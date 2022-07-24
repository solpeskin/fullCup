import React, { useState } from 'react'
import Logo from '../img/logo.svg'
import CardWidget from './CardWidget';
import ItemListContainer from './ItemListContainer';


const NavBar = () => {
  
  return (
    <header>
      <ul className='menu-list'>
        <li><a>Inicio</a></li>
        <li><a>Shop</a></li>
        <li><a>Nosotros</a></li>
      </ul>
      <img src={Logo} className="logo-fullCap"/>
      <div className="cart">
        <div>
          <CardWidget/>
          <ItemListContainer />
        </div>
      </div>
    </header>
  )
}

export default NavBar