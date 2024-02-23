import { useContext } from "react"
import { searchcontext } from "../context/SearchContext"
let useSearch=()=> {
   return  useContext(searchcontext)
}

export default useSearch