import { createContext, useContext, useEffect, useState } from "react";
 let authcontext=  createContext()
export function AuthContext({children})
{
    //this is for getDetails form localStorage
    function getItem()
    {
      return localStorage.getItem('e1ecom')?JSON.parse(localStorage.getItem('e1ecom')): {user:'',token:null}
    }
    let [auth,setAuth]=useState(getItem())

    useEffect(()=>{
        localStorage.setItem('e1ecom',JSON.stringify(auth))
    },[auth])
    return <authcontext.Provider value={{auth,setAuth}}>{children}</authcontext.Provider>
}

//custom hook for consuming auth
export let useAuth=()=>{
    let {auth,setAuth}= useContext(authcontext)
    return [auth,setAuth]
}