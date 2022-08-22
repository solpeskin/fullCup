const ItemCount = ({stock, amount, setAmount, onAdd}) => {
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
                <button onClick={decreaseAmount}><p>-</p></button>
                <p>{amount}</p>
                <button onClick={increaseAmount}><p>+</p></button>
            </div>

            <button onClick={()=>onAdd(amount)} className="addButton">Agregar al carrito</button>
            <p className='stockAvailable'>Stock disponible: {stock}</p> 
        </div>
    )
}

export default ItemCount