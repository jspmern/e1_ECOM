import React from 'react'

function CategoryForm({category ,setInputHandler , sumbmitCategoryHandler }) {
  return (
     <div className='m-2 d-flex'>
        <input type='text' placeholder='Enter new Category' className='p-1'  value={category}  onChange={(e)=>{
            setInputHandler(e)
        }}/>
        <button className='btn btn-primary ms-3' onClick={sumbmitCategoryHandler}>Submit</button>
     </div>
  )
}

export default CategoryForm