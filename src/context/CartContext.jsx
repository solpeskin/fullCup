import { useEffect } from "react";
import { createContext, useState } from "react";
import {toast} from 'react-toastify';
import {setDoc, getFirestore, doc} from 'firebase/firestore'

export const CartContext = createContext([])


const CartProvider = ({children}) => { //children es los componentes dentro del carProvider en app
    const localStorageCart = JSON.parse(localStorage.getItem('cart'))
    const [cart, setCart] = useState(localStorageCart ? localStorageCart : [])
    
    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    const isInCart = (item) => {
        return cart.findIndex((itemCart)=> itemCart.id === item.id)
    }

    const cleanCart = () => {
        setCart([])
    }

    const addToCart = (item, quant) => {
        const indexOfItem = isInCart(item)
        
        // si el producto ya está en el carrito...
        if (indexOfItem !== -1){
            const cartDraft = [...cart]
            cartDraft[indexOfItem].quant = quant 
            
            setCart(cartDraft) 
        }
        
        else {
            setCart([...cart, {...item, quant}])
        }
        
        toast(`Agregaste '${item.name}' a tu carrito!`)
    }

    const deleteItem = (item) => {
        const itemDeleted = cart.filter((itemCart)=> itemCart.id!== item.id)
        setCart(itemDeleted)

        toast(`Eliminaste '${item.name}' de tu carrito!`)
    }

    const uploadStock = () => {
        const db = getFirestore()

        cart.forEach((item) => {
            const id = item.id
            const itemDoc = doc(db, "products", id)
            const stock = item.stock - item.quant

            setDoc(itemDoc, {stock: stock}, {merge: true});
        })
    
      ;
    }

    const cartProducts = cart.reduce((previous, item)=>item.quant + previous, 0)
    const totalPrice = cart.reduce((previous, item)=>item.price * item.quant + previous, 0)

    const valueContext = {
        cart,
        totalPrice,
        cartProducts,
        uploadStock,
        isInCart,
        cleanCart,
        addToCart,
        deleteItem
    }

    return (
        <CartContext.Provider value={valueContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider