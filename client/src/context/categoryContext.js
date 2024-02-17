import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export let categoryContext = createContext();
function CategoryContext({ children }) {
  let [categories, setCategories] = useState([]);
  let [changeCategory,setChangeCategory]=useState(false)
  async function getAllCategory() {
    try {
      let result = await axios.get("/api/v1/all-category");
      setCategories(result.data.category);
    } catch (error) {
        console.log(error)
        toast(error.message)
    }
  }
  useEffect(() => {
    getAllCategory();
  }, [changeCategory]);
  return <categoryContext.Provider value={{categories,setChangeCategory,changeCategory}}> {children} </categoryContext.Provider>;
}

export default CategoryContext;
