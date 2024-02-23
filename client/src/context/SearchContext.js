import React, { createContext, useState } from 'react'
export let searchcontext=createContext()
function SearchContext({children}) {
   
    let [search,setSearch]=useState({keyword:'',result:[]})
  return  <searchcontext.Provider value={{search,setSearch}}>{children}</searchcontext.Provider>
}

export default SearchContext