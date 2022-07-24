import React, { useState } from 'react'

const ItemCount = (props) => {
    const [amount, setAmount] = useState(props.initial)
    const stock = props.stock

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

    return (
        <div className='itemCount'>
            <div className='selectAmount'>
                <button onClick={increaseAmount}><p>+</p></button>
                <p>{amount}</p>
                <button onClick={decreaseAmount}><p>-</p></button>
            </div>

            <button onClick={()=>props.onAdd(amount)} className="addButton">Agregar al carrito</button>
            <p className='stockAvailable'>Stock disponible: {stock - amount}</p>
        </div>
    )
}

export default ItemCount