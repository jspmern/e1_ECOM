import React from 'react'
import MoreDeatils from '../components/form/MoreDeatils'
import AddToCart from '../components/form/AddToCart'
import { useNavigate } from 'react-router-dom'

function SimilarProduct({product}) {
    let navigate=useNavigate()
    function singlPageHandler(id)
    {
        
         navigate(`/product-details/${id}`)
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
                {product.length==0 && <h4>loading...</h4>}
                {product.length>0 && product.map((item)=>{
                    return <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <img src={item?.images[0]?.url} alt={item?.images[0]?.url} className='img-fluid'/>
                                </div>
                                <h6>{item?.name}</h6>
                                <p>{item?.description}</p>
                                <p>{item?.brand}</p>
                                <MoreDeatils p_id={item._id} singlPageHandler={singlPageHandler}  />
                                {/* <button className="btn btn-primary" onClick={()=>{
                                    singlePageHandler(item._id)
                                }}>MORE DETAILS</button> */}
                                <AddToCart prod={item}/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default SimilarProduct