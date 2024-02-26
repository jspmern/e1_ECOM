import React  from 'react'
import useCart from '../../hook/useCart'
import toast from 'react-hot-toast'

function AddToCart({prod}) {
  let [cart,setCart]=useCart()
  function setCartHandler()
  {
    setCart([prod,...cart])
    toast('Item Added In Cart')
  }
  return (
    <button className="btn btn-secondary ms-2" onClick={setCartHandler}>
    ADD TO CART
  </button>
  )
}

export default AddToCart