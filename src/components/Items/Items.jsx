import React from 'react'
import {useNavigate } from 'react-router-dom'

const Items = ({product}) => {
  const navigate = useNavigate()

  const cardOnHover = (e)=>{
    e.target.classList.add("card-onHover")
  }

  return (
    <div id={product.id} className="itemContainer" onMouseEnter={cardOnHover} onClick={()=> navigate(`/item/${product.id}`)} data-aos="zoom-in-up">
      <div className="card">
        {!product.stock && <div className='no-stock'><div>Sin stock</div></div>}
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