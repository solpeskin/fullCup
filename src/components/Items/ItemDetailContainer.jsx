import React, { useState, useEffect }  from 'react'
import { useParams } from "react-router-dom";

import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

import ItemDetail from "./ItemDetail";
import LoadingSymbol from '../LoadingSymbol';

const ItemDetailContainer = () => {
    const [item, setItem] = useState("")
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    
    const getProductFetch = (id)=>{
      fetch("../../JSON/DataList.json")
      .then((res)=>res.json())
      .then((products)=>setItem(products.filter((product)=>product.id === id)))
      .finally(()=> setLoading(false))  
    }

    const getProductFb = (id) =>{
      const db = getFirestore()
      const itemsCollectionQuery = query(collection(db, "products") , where("id" , "===", id))  

      getDocs(collection(db, "products"))
	      .then((snapshot) => {
		      const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
          const dataItem = data.filter((item)=> item.id === id)

          setItem(dataItem)
	      })
        .finally(()=>setLoading(false))

    }

    useEffect(() => {
      getProductFb(id)
    }, [id]);

  return (
    <div className='itemDetailContainer'>
      { loading ? <LoadingSymbol/> : <ItemDetail item={item[0]}/>}
    </div>
  )
}

export default ItemDetailContainer