import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { womanData } from '../components/data/woman'
const WomenSingle = () => {
    const {id}=useParams()
    const product=womanData.find(item=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className="singleProduct">
        <div className="singleImage">
            <img src={product.image} alt="" />
        </div>
        <div className="productDetails">
            <div className="singleModel">
                <h3>{product.type}
                </h3>
            </div>
            <div className="singlePrice">
                <h3>{product.price}</h3>
            </div>
            <div className="singleDesc">
                 <h3>{product.description}</h3>
            </div>
            <div className="singleModel">
                <h3>{product.brand}
                </h3>
                </div>
            <button>Add to Cart</button>
            <button>Buy</button>
        </div>
    </div>
    </>
    
        
   
  )
}

export default WomenSingle
