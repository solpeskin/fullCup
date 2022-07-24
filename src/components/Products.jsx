import React from 'react'
import ItemCount from './ItemCount'

const products = () => {
    const onAdd = (amount)=>{
        console.log(`agregaste ${amount} productos`)
    }

    return (
        <div className='products'>
            <ItemCount stock={15} initial={0} onAdd={onAdd}/>
            <ItemCount stock={7} initial={0} onAdd={onAdd}/>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </div>
    )
}

export default products