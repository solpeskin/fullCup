import React, {useState} from 'react'
import ItemCount from './ItemCount'

import coffe1 from '../../img/coffe2.png'
import coffe2 from '../../img/coffe3.png'
import coffe3 from '../../img/coffe4.png'
import { Link, useNavigate } from 'react-router-dom'

import {toast} from 'react-toastify';

const ItemDetail = ({item}) => {
  const granos = [coffe1, coffe2, coffe3, coffe1, coffe2]

  const navigate = useNavigate()
  const [amount, setAmount] = useState(0)
  const [bought, setBought] = useState(false)

  const onAdd = (amount)=> {
    if (amount >= 1){
      setBought(true)
      toast(`${item.name} agregado al carrito!`,{
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "toast-item-count"
      });
    }
  }

  return (
    <div className='itemDetail'>
      <Link to='/products'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white"  viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </Link>
      <div className="detailBox">
        <div className="image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="info">
          <h2>{item.name}</h2>
          <h6>{item.description}</h6>
          <p className='price'>{item.price}$</p>

          {bought ? 
            <div className="bought-true">
              <button className='to-cart' onClick={()=>navigate("/cart")}>Ir al carrito</button>
              <button className='keep' onClick={()=>navigate("/products")}>Seguir comprando</button>
            </div> 
          : <ItemCount stock={item.stock} amount={amount} setAmount={setAmount} onAdd={onAdd}/>}

        </div>
        <div className="coffee-decoration">
          {granos.map((img, index)=> <img src={img} alt="grano de café" key={index} className={"coffee"+index } />)}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail