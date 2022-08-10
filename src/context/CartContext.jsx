import { createContext, useState } from "react";
export const CartContext = createContext([])

const CartProvider = ({children}) => { //children es los componentes dentro del carProvider en app
    const [cart, setCart] = useState([])
    
    const isInCart = (item) => {
        return cart.findIndex((itemCart)=> itemCart.id === item.id)
    }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quant) => {
        const indexOfItem = isInCart(item)
        
        if (indexOfItem !== -1){
            const cartDraft = [...cart]
            cartDraft[indexOfItem].quant += quant 
            
            setCart(cartDraft)   
        }
        
        else {
            setCart([...cart, {...item, quant}])
        }
    }
    
    const removeFromCart = (item) =>{
        const cartDraft = [...cart]
        cartDraft.splice(isInCart(item), 1)

        setCart(cartDraft)   
    }

    const deleteItem = (item) => {
        const itemDeleted = cart.filter((itemCart)=> itemCart.id!== item.id)
        setCart(itemDeleted)
    }

    const valueContext = {
        cart,
        isInCart,
        cleanCart,
        addToCart,
        removeFromCart,
        deleteItem,
    }

    return (
        <CartContext.Provider value={valueContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider