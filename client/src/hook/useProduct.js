import { useContext } from "react"
import { productContext } from "../context/ProductContext"

let useProduct=()=>{
    return useContext(productContext)
}
export default useProduct