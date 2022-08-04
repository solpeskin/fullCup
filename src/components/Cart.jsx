import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [productsCart, setProductsCart] = useState("")
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="products-cart">
        {productsCart || 
        <div>
          <p>Tu carrito está vacío :(</p>
          <p onClick={()=>navigate("/products")} className="p-css">Ir a comprar</p>
        </div>}
      </div>
    </div>
  )
}

export default Cart