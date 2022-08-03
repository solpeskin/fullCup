import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Items = ({product}) => {
  const navigate = useNavigate()

  const cardOnHover = (e)=>{
    e.target.classList.add("card-onHover")
  }

  return (
    <div id={product.id} className="itemContainer" onMouseEnter={cardOnHover} onClick={()=> navigate(`/item/${product.id}`)}>
      <div className='card' data-color={product.color} >
        <div className='imgBx'>
          <img src={product.img} className="productImg" alt={product.name}/>
        </div>

        <div className='contentBx'>
          <h2 className='title'> {product.name} </h2>
          <p className='description'>{product.description}</p>
        </div>
          
      </div>
    </div>
  )
}

export default Items