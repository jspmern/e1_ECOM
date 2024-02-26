import { createContext, useEffect, useState } from "react"

export let cartContext =createContext()

function CartContext({children}) {
    let [cart,setCart]=useState(getCartData())
    function getCartData()
    {
       return localStorage.getItem('e1ecomcart')?JSON.parse(localStorage.getItem('e1ecomcart')):[]
    }
    useEffect(()=>{
        localStorage.setItem('e1ecomcart',JSON.stringify(cart))
    },[cart])
  
    return <cartContext.Provider value={[cart,setCart]}>{children}</cartContext.Provider>
}

export default CartContext