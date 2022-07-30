import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {
    const [amount, setAmount] = useState(initial)

    const increaseAmount = ()=>{
        if (amount<stock){
            setAmount(amount + 1)
        }
    }

    const decreaseAmount = ()=>{
        if (amount>0){
            setAmount(amount - 1)
        }
    }

    const onAdd = (amount)=>{
        console.log(`agregaste ${amount} productos`)
    }

    return (
        <div className='itemCount'>
            <div className='selectAmount'>
                <button onClick={decreaseAmount}><p>-</p></button>
                <p>{amount}</p>
                <button onClick={increaseAmount}><p>+</p></button>
            </div>

            <button onClick={()=>onAdd(amount)} className="addButton">Agregar al carrito</button>
            <p className='stockAvailable'>Stock disponible: {stock - amount}</p> 
        </div>
    )
}

export default ItemCount