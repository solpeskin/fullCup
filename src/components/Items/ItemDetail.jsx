import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='itemDetail'>
        <p>{item.name}</p>
    </div>
  )
}

export default ItemDetail