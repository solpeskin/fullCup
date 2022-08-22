import React, { useEffect, useState }  from 'react'
import ItemList from "./ItemList"

import LoadingSymbol from "../LoadingSymbol";
import { useParams, Link } from "react-router-dom";

import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = () => { 
  const [allProducts, setAllProducsts] = useState([])
  const [productsArray, setProductsArray] = useState([])
  const {category} = useParams()
  
  const [loading, setLoading] = useState(true)
  const loadingSymbol = <LoadingSymbol/>
  
  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db, "products")

    getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setAllProducsts(data)
      })
      .finally(()=> {setLoading(false)})
    ;
    
    // const q = query(itemsCollection, where("category", "==", category))
    // getDocs(q)

    // En vez de hacer una petición cada vez que cambie de categoría, preferí hacer una petición de todos los productos solo
    // una vez, guardarla en una variable con todos los productos y hacerle la filtración a esa variable.
    // No desde firebase. Ya que así evito que tarde más la página en cargar.

    getProductsFiltered();
    setClickedCategory();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProducts])
  
  // categoría
  const getProductsFiltered = () => {
    let search = document.querySelector("#search-text").value.toLowerCase().trim()
    const productsSearched = allProducts.filter((product)=>product.name.toLowerCase().includes(search));

    if (category){
      const productsFiltered = productsSearched.filter((product)=>product.category === category)
      setProductsArray(productsFiltered)
    }

    else {
      setProductsArray(productsSearched)
    }
  }
  
  // botones de categoría (css)
  const setClickedCategory = () => {
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
          <input 
            type="search" 
            placeholder='Busca acá el nombre del producto...' 
            id='search-text' 
            onChange={()=>getProductsFiltered()}
          />
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