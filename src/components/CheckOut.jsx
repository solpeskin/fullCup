import React, {useContext} from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './Cart/CartItem'

import { useNavigate } from 'react-router-dom'

import {addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore'

const CheckOut = () => {
    const {cart, totalPrice, cleanCart, uploadStock} = useContext(CartContext)
    const [warning, setWarning] = useState("")
    const [buyerData, setBuyerData] = useState("")
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const getBuyerData = (e) => {
        setBuyerData({
            ...buyerData,
            [e.target.name] : e.target.value
        })
    }

    const checkData = () => {
        // si no esta completo 
        const arrayInputs = [...document.querySelectorAll("input")]
        const emptyInput = arrayInputs.filter((inp)=> inp.value === "")

        if (!emptyInput[0]) {
            return true
        }
    }

    const disableinputs = () => {
        document.querySelectorAll("input").forEach((i)=>{
            i.disabled = true
        })

        document.querySelector("textarea").disabled = true
    }

    const buyout = (e) => {
        e.preventDefault()

        if (checkData()){
            setWarning("")
            disableinputs()

            setLoading(true)
            uploadStock()

            const db = getFirestore()
            const salesCollection = collection(db, "sales")
    
            addDoc(salesCollection, {
                buyerData,
                items: cart,
                total: totalPrice,
                date: serverTimestamp()
            })
            .then((res)=> {
                setOrderId(res.id)
                cleanCart()
            })
            .finally(() => {
                setLoading(false)
            })
        }

        else {
            setWarning("Rellene todos los campos correctamente")
        }
    }

  return (
    <div className='checkOut' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        { loading && <div className="dot-spin"></div>}
        <div className="form">
            <h3>Contacto</h3>
            
            <form onSubmit={buyout}>
                <input type="text" name='name' placeholder="Nombre completo" id="buyer-name" onChange={getBuyerData}/>
                <input type="email" name='email' placeholder="Email" id="buyer-email" onChange={getBuyerData}/> {/* me falta verificar el mail, pero no lo considero necesario todavía */}
                <input type="tel" name='telephone' placeholder="Teléfono" id="buyer-name" onChange={getBuyerData}/>

                <textarea name="comment" id="exampleFormControlTextarea1" rows="3" placeholder='Déjanos algún mensaje (opcional)' onChange={getBuyerData}></textarea>
                <button type="submit" id='buyer-send'>Envíar</button>

                <p className="warning">{warning}</p>
            </form>
        </div>
        <div className="itemsOnCart">
            <div className="items-cart">
                {cart.map((item)=> <CartItem item={item} key={item.id} noButtons={true}/>)}
            </div>
            <div className="precioFinal">
                <p>Precio final:</p>
                <p>{totalPrice}$</p>
            </div>

        </div>
        {orderId 
            &&<div className="finished">
                <div>
                    <h2>¡Muchas gracias por confiar en nosotros!</h2>
                    <p>Sigue tu orden: {orderId}</p>
                    <svg onClick={()=>navigate("/")} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </div>
            </div>
        }
    </div>
  )
}

export default CheckOut