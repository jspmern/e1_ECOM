import React from 'react'
import useSearch from '../../hook/useSearch'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Search() {
   let {search,setSearch}= useSearch()
   let navigation=useNavigate()
   //this is for search
   function searchHandler(e)
   {
       setSearch({...search,keyword:e.target.value})
       
   }
   //this is for searchsubmitHandler
   async  function searchSubmitHandler()
   {
      try {
           let {data}=await axios.get(`/api/v1//search-product/${search.keyword}`)
            if(data.success)
            {
                setSearch({...search,result:data.products})
                navigation('/search')
            }
            else{
                toast(data.message)
                return 
            }
      }
      catch(err)
      {
        toast(err.message)
      }
   }
  return (
    <div>
    <input type="text" placeholder="Search..." className="p-2" value={search.keyword}  onChange={searchHandler}/>
           <button className="btn btn-info p-2 ms-2" onClick={searchSubmitHandler}>Search</button>
    </div>
  )
}

export default Search