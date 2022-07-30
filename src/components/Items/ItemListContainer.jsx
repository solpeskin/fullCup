import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'

import { toast } from 'react-toastify';
import { data } from '../../services/DataProducts';
import LoadingSymbol from '../LoadingSymbol';

const ItemListContainer = () => {
  const notify = (msg)=>{
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
    
  const [productsArray, setProductsArray] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("")

  const loadingSymbol = <LoadingSymbol/>
  
  useEffect(()=>{
    data
    .then((res)=>setProductsArray(res)) // guardo los productos 
    .catch((err)=>{
      notify(err)
    })
    .finally(()=> setLoading(false))
  }, [category])  // cada vez que cambia la categoría

  // useEffect(()=>{
  //   fetch("../public/JSON/DataList.json")
  //   .then((res)=>{
  //     console.log(res)
  //     res.json()
  //   })
  //   .then((res)=>{
  //     console.log(res)
  //   })

  //   .catch((err)=>{notify(err)})
  //   .finally(()=> setLoading(false))
  // }, [category])
  

  return (
    <div className='itemListContainer'>
      { loading ? loadingSymbol : <ItemList items={productsArray}/>}
    </div>
  )
}

export default ItemListContainer
