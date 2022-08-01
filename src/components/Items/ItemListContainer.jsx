import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'

import LoadingSymbol from '../LoadingSymbol';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {    
  const [productsArray, setProductsArray] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()
  const [searching, setSearching] = useState("")

  const loadingSymbol = <LoadingSymbol/>

  useEffect(()=>{
    fetch("../../JSON/DataList.json")
    .then((res)=>res.json())
    .then((products)=>getProducts(products))
    .finally(()=> setLoading(false))

    setClickedCategory()
  }, [category])

  const getProducts = (arrayProducts)=>{
    if (category){
      const productsFiltered = arrayProducts.filter((product)=>product.category == category)
      setProductsArray(productsFiltered)
    }

    else {
      setProductsArray(arrayProducts)
    }
  }
  
  // botones de categoría
  const setClickedCategory = ()=>{
    document.querySelectorAll("button").forEach((button)=>{
      button.classList.remove("clicked")
    })

    if (document.querySelector(`.${category}`)){
      document.querySelector(`.${category}`).classList.add("clicked")
    }

    else {
      document.querySelector(".todo").classList.add("clicked")
    }
  }

  // buscador 
  const searchingTerm = (e)=>{
    setSearching(e.target.value)
    filter()
  }

  const filter = ()=>{
    let searchResult = productsArray.filter((product)=>{
      if (product.name.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        return product
      }
    })

    // setProductsArray(searchResult)
    console.log(searchResult)
  }


  return (
    <div className="products">
      <div className='categoryFilter'>
        <div className="search">
          <input type="search" placeholder='Busca acá el nombre del producto...' id='search-text' onChange={searchingTerm}/>
          <button >Buscar</button>
        </div>
        <div className="filter">
          <Link to="/products"><button className="todo" >Todo</button></Link>
          <Link to="/products/cápsula"><button className="cápsula">Cápsula</button></Link>
          <Link to="/products/elementos"><button className="elementos" >Elementos</button></Link>
          <Link to="/products/café-molido"><button className="café-molido" >Café molido</button></Link>
        </div>
      </div>

      <div className='itemListContainer'>
        { loading ? loadingSymbol : <ItemList items={productsArray}/>}
      </div>
    </div>
  )
}

export default ItemListContainer
