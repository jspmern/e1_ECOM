import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export let categoryContext = createContext();
function CategoryContext({ children }) {
  let [categories, setCategories] = useState([]);
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
  }, []);
  return <categoryContext.Provider value={categories}> {children} </categoryContext.Provider>;
}

export default CategoryContext;
