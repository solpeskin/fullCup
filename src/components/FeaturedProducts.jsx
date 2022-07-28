import React from 'react'
import {Link} from "react-router-dom";

import img1 from '../img/black-cacao-sin-fondo.png'

const FeaturedProducts = () => {
  return (
    <div className='featuredProducts'>
        <div className="text">
            <h4>¡Hey, tú!</h4>
            <h5>Sé el café de nuestras mañanas</h5>
            <div className='nuestrosProductos'>
                <p><Link to={'/products'}>Nuestros productos</Link></p>   
                <svg className="arrow-effect" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </div>
        </div>
        <div className="img">
            <div className="circle"></div>
            <img src={img1} className="img2" alt=""/>    
            <img src={img1} className="img1" alt=""/>    
            <img src={img1} className="img3" alt=""/>    
        </div>
    </div>
  )
}

export default FeaturedProducts