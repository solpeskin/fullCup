import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'

import { data } from '../../services/DataProducts';
import LoadingSymbol from '../LoadingSymbol';
import CategoryFilter from './CategoryFilter';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {    
  const [productsArray, setProductsArray] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()

  const loadingSymbol = <LoadingSymbol/>
  
  useEffect(()=>{
    data
    .then((res)=>{
      if (category){
        const productsFiltered = res.filter((product)=>product.category == category)
        setProductsArray(productsFiltered)
      }

      else {
        setProductsArray(res)
      }
    }) // guardo los productos 
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
      <CategoryFilter/>
      { loading ? loadingSymbol : <ItemList items={productsArray}/>}
    </div>
  )
}

export default ItemListContainer
