import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'

import LoadingSymbol from '../LoadingSymbol';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => { 
  const [allProducts, setAllProducsts] = useState([])
  const [productsArray, setProductsArray] = useState([])
  const {category} = useParams()
  
  const [loading, setLoading] = useState(true)
  const loadingSymbol = <LoadingSymbol/>

  useEffect(()=>{
    fetch("../../JSON/DataList.json")
    .then((res)=>res.json())
    .then((products)=>setAllProducsts(products))
    .finally(()=> setLoading(false))

    getProducts()
    setClickedCategory()
  }, [allProducts])

  // categoría
  const getProducts = () => {
    let search = document.querySelector("#search-text").value.toLowerCase().trim()
    const productsSearched = allProducts.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))

    if (category){
      const productsFiltered = productsSearched.filter((product)=>product.category == category)
      setProductsArray(productsFiltered)
    }

    else {
      setProductsArray(productsSearched)
    }
  }
  
  // botones de categoría (css)
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

  return (
    <div className="products">
      <div className='categoryFilter'>
        <div className="search">
          <input type="search" placeholder='Busca acá el nombre del producto...' id='search-text' onChange={()=>getProducts()}/>
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