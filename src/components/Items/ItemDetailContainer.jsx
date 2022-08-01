import React, { useState, useEffect }  from 'react'
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { data } from '../../services/DataProducts';

import LoadingSymbol from '../LoadingSymbol';



const ItemDetailContainer = () => {
    const [item, setItem] = useState("")
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    
    // fetch - then
    // const getProductFetch = (id)=>{
    //     fetch("../../../public/JSON/DataList.json")
    //     .then((res)=>{
    //         console.log(res)
    //         res.json()
    //     })
    //     .then((res)=> {
    //         // setItem(res.filter((product)=>product.id == id))
    //         console.log(res)
    //     })

    //     // .finally(()=> setLoading(true))
    // }


    // manual 
    const getProductManual = (id)=>{
        data
        .then((array)=>setItem(array.filter((product)=>product.id == id))) // guardo los productos 
        .catch((err)=>console.log(err))
        .finally(()=> setLoading(false))
    }

    // cada vez que cambia el id 
    useEffect(() => {
        // getProductManual(id);
        getProductManual(id)
    }, [id]);

  return (
    <div className='itemDetailContainer'>
      { loading ? <LoadingSymbol/> : <ItemDetail item={item[0]}/>}
    </div>
  )
}

export default ItemDetailContainer