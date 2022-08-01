import React from 'react'
import ItemCount from './ItemCount'

import coffe1 from '../../img/coffe2.png'
import coffe2 from '../../img/coffe3.png'
import coffe3 from '../../img/coffe4.png'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
  const granos = [coffe1, coffe2, coffe3, coffe1, coffe2]

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
          <ItemCount stock={item.stock} initial={0}/>
        </div>
        <div className="coffee-decoration">
          {granos.map((img, index)=> <img src={img} alt="grano de café" key={index} className={"coffee"+index } />)}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail