import { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext([])

const ProductsProvider = ({children}) => { 
    const [data, setData] = useState()
    function getProducts () {
        fetch("../../JSON/DataList.json")
        .then((res)=>res.json())
        .then((products)=>setData(products))
    }

    useEffect(()=>{
        getProducts()
    })

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider