import { useContext, useEffect, useState } from "react"
import { categoryContext } from "../context/categoryContext"

 
function useCategory() {
  
 return useContext(categoryContext)
}

export default useCategory