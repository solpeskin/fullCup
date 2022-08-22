import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom";

import {getDoc, getFirestore, doc} from 'firebase/firestore'

import ItemDetail from "./ItemDetail";
import LoadingSymbol from '../LoadingSymbol';

const ItemDetailContainer = () => {
  const [item, setItem] = useState("")
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = doc(db, "products", id)
    
    getDoc(itemsCollection)
    .then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()})
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  
    }, [id]);

  return (
    <div className='itemDetailContainer'>
      { loading ? <LoadingSymbol/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer