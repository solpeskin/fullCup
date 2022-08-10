import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem';
import { Link, useNavigate } from "react-router-dom";


const OffCanvas = ({show, handleClose}) => {
  const navigate = useNavigate()
  const {cart} = useContext(CartContext)

  if (!cart){
    return <p></p>
  }

  return (
    <>
      <div id='offCanvas-backdrop' className={show}></div>
      {/* {cart || <p>Su carrito está vacío!</p>} */}
      <div id='offCanvas'>
        <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>

        <div className="items-cart">
          {cart.map((item)=> <CartItem handleClose={handleClose} item={item} key={item.id}/>)}
        </div>

        <div className="see-cart">
          <button onClick={()=>navigate('/cart')}>Ver carrito</button>
        </div>
      </div>
    </>
  );
}

export default OffCanvas