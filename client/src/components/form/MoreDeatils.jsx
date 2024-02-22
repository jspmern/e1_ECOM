import React from 'react'

function MoreDeatils({p_id,singlPageHandler}) {
  return (
    <button className="btn btn-primary" onClick={()=>{
        singlPageHandler(p_id)
    }}>
    More Details
  </button>
  )
}

export default MoreDeatils