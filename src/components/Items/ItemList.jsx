// recibe los productos 
import React from 'react'
import Items from './Items'

const ItemList = ({items}) => {
    const onAdd = (amount)=>{
        console.log(`agregaste ${amount} productos`)
    }

    return (
        <div className='itemList'>
            {items.map((item)=> <Items key={item.id} product={item} onAdd={onAdd}/>)}
        </div>
    )
}

export default ItemList