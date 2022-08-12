import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartItem = ({item, handleClose}) => {
  const {img, name, quant, price, id} = item
  const {deleteItem} = useContext(CartContext)
  const [priceQuant, setPriceQuant] = useState(price)

  useEffect(()=>{
    setPriceQuant(price * quant)
  }, [quant, price])

  return (
    <div className='item-cart'>
        <img src={img} alt={name} />
        <div className='item-resume'>
          <div className='content-item'>
              <h4>{name}</h4>
              <div style={{display: 'flex'}}>
                <p>{price}$</p>
                <p>Cantidad: {quant}</p>
              </div>
          </div>
          <button onClick={()=>deleteItem(item)}>Eliminar</button>
          <button onClick={handleClose && handleClose } ><Link to={`/item/${id}`}>Ver más</Link></button>
        </div>
        <h3>{priceQuant}$</h3>
    </div>
  )
}

export default CartItem