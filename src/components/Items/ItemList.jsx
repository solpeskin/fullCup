// recibe los productos 
import React from 'react'
import Items from './Items'

const ItemList = ({items}) => {
    return (
        <div className='itemList'>
            {items.map((item)=> <Items key={item.id} product={item}/>)}
        </div>
    )
}

export default ItemList