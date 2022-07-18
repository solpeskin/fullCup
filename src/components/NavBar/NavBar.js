import React from 'react'
import Logo from '../../img/logo.svg'
import CardWidget from '../CardWidget/CardWidget.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const NavBar = () => {
  let prodcuts = 0;

  const addProduct = () =>{
    prodcuts += 1
    console.log(prodcuts)
  }
  
  return (
    <header>
      <ul className='menu-list'>
        <li><a>Inicio</a></li>
        <li><a>Shop</a></li>
        <li><a>Nosotros</a></li>
      </ul>
      <img src={Logo} className="logo-fullCap"/>
      <div className="cart">
        <CardWidget add={addProduct}/>
        <ItemListContainer productsNum={prodcuts}/>
      </div>
    </header>
  )
}

export default NavBar