import React, { useState, useEffect }  from 'react'
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

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

    useEffect(() => {
        getProductFetch(id)
    }, [id]);

  return (
    <div className='itemDetailContainer'>
      { loading ? <LoadingSymbol/> : <ItemDetail item={item[0]}/>}
    </div>
  )
}

export default ItemDetailContainer