import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import cafeIlustration from '../../img/no-items2.png'

const Cart = () => {
  const {cart} = useContext(CartContext)
  const [finalPrice, setFinalPrice] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    const price = cart.reduce((previous, item)=>item.price * item.quant + previous, 0)
    setFinalPrice(price)
  }, [cart])

  if (cart.length === 0){
    return (
      <div className='cart'>
        <div className="content">
          <div className="products-cart">
            <div className="empty-cart">
              <p onClick={()=>navigate("/products")} className="p-css">Ir a comprar</p>
              <p>Tu carrito está vacío!</p>
              <img src={cafeIlustration} alt='ilustración hombre durmiendo en café'/>
            </div> 
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='cart'>
      <div className="content">
        <div className="products-cart">
          <div className="items-cart">
            {cart.map((item)=> <CartItem item={item} key={item.id}/>)}
          </div>
        </div>

        <h3 className='total-price'>Total: {finalPrice}$</h3>
      </div>
    </div>
  )
}

export default Cart