import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
// import ItemCount from '../Items/ItemCount'

const CartItem = ({item, handleClose}) => {
  const {img, name, quant, price, id} = item
  const {removeFromCart} = useContext(CartContext)

  return (
    <div className='item-cart'>
        <img src={img} alt={name} />
        <div className='item-resume'>
          <div className='content-item'>
              <h4>{name}</h4>
              <p>Cantidad: {quant}</p>
          </div>
          <button onClick={()=>removeFromCart(item)}>Eliminar</button>
          {handleClose 
          ? <button onClick={handleClose} ><Link to={`/item/${id}`}>Ver más</Link></button>
          : <button><Link to={`/item/${id}`}>Ver más</Link></button>}
        </div>
        {/* {itemCount && <ItemCount stock={}/>} */}
        <h3>{price}$</h3>
    </div>
  )
}

export default CartItem