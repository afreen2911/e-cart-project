import React from 'react'
import { kidsData } from '../components/data/kids'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const KidSingle = () => {
    const {id}=useParams()
    const product=kidsData.find(item=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className="singleProduct">
        <div className="singleImage">
            <img src={product.image} alt="" />
        </div>
        <div className="productDetails">
            <div className="singleModel">
                <h3>{product.model}
                </h3>
            </div>
            <div className="singlePrice">
                <h3>{product.price}</h3>
            </div>
            <div className="singleDesc">
                 <h3>{product.description}</h3>
            </div>
            <div className="singleModel">
                <h3>{product.company}
                </h3>
                </div>
            <button>Add to Cart</button>
            <button>Buy</button>
        </div>
    </div>
    </>
  )
}

export default KidSingle
