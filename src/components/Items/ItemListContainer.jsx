import React, { useEffect, useState }  from 'react'
import ItemList from './ItemList'

import { data } from '../../services/DataProducts';
import LoadingSymbol from '../LoadingSymbol';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {    
  const [productsArray, setProductsArray] = useState([])
  const [loading, setLoading] = useState(true)
  const {category} = useParams()
  const [searching, setSearching] = useState("")

  const loadingSymbol = <LoadingSymbol/>


  const buttonOnclick = (e)=>{
    document.querySelectorAll("button").forEach((button)=>{
      button.classList.remove("clicked")
    })

    e.target.classList.add("clicked")
  }

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

  const getProducts = ()=>{
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
  }
  
  useEffect(()=>{
    getProducts()
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
    <div className="products">
      <div className='categoryFilter'>
        <div className="search">
          <input type="search" placeholder='Busca acá el nombre del producto...' id='search-text' onChange={searchingTerm}/>
          <button >Buscar</button>
        </div>
        <div className="filter">
          <Link to="/products"><button onClick={buttonOnclick} className="clicked">Todo</button></Link>
          <Link to="/products/cápsula"><button onClick={buttonOnclick}>Cápsula</button></Link>
          <Link to="/products/elementos"><button onClick={buttonOnclick}>Elementos</button></Link>
          <Link to="/products/café-molido"><button onClick={buttonOnclick}>Café molido</button></Link>
        </div>
      </div>

      <div className='itemListContainer'>
        { loading ? loadingSymbol : <ItemList items={productsArray}/>}
      </div>
    </div>
  )
}

export default ItemListContainer
