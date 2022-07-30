import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Items = ({product}) => {

  const cardOnHover = (e)=>{
    e.target.classList.add("card-onHover")
  }

  return (
    <Link to={`/item/${product.id}`}>
      <div id={product.id} className="itemContainer" onMouseEnter={cardOnHover}>
        <div className='card' data-color={product.color} >
          {/* <ItemCount stock={product.stock} initial={0} /> */}

          <div className='imgBx'>
            <img src={product.img} className="productImg" alt={product.name}/>
          </div>

          <div className='contentBx'>
            <h2 className='title'> {product.name} </h2>
            <p className='description'>{product.description}</p>
            <p className='price'>{product.price}$</p>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default Items