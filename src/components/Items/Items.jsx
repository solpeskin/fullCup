import React from 'react'
import ItemCount from './ItemCount'

const Items = ({product, onAdd}) => {

  const cardOnHover = (e)=>{
    e.target.classList.add("card-onHover")
  }


  return (
    <div id={product.id} className="itemContainer" onMouseEnter={cardOnHover}>
      <div className='card' data-color={product.color} >
        <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/>

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
  )
}

export default Items