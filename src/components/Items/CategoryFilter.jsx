import React from 'react'
import { Link } from 'react-router-dom'

const CategoryFilter = () => {

  const buttonOnclick = (e)=>{
    document.querySelectorAll("button").forEach((button)=>{
      button.classList.remove("clicked")
    })

    e.target.classList.add("clicked")
  }

  return (
    <div className='categoryFilter'>
        <div className="search">
            <input type="search" placeholder='Busca acá el nombre del producto...' id='search-text'/>
            <button>Buscar</button>
        </div>
        <div className="filter">
            <Link to="/products"><button onClick={buttonOnclick} className="clicked">Todo</button></Link>
            <Link to="/products/cápsula"><button onClick={buttonOnclick}>Cápsula</button></Link>
            <Link to="/products/elementos"><button onClick={buttonOnclick}>Elementos</button></Link>
            <Link to="/products/café-molido"><button onClick={buttonOnclick}>Café molido</button></Link>
        </div>
    </div>
  )
}

export default CategoryFilter