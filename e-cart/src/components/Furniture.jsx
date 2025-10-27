import React from 'react'
import './Furniture.css'
import { furnitureData } from './data/furniture'

const Furniture = () => {
  const images=furnitureData.slice(0,5)
  return (
    <>
    <h3>Furniture</h3>
    <div className="furnitureSection">{
          images.map((item)=>{  
          return(
              <div className="furnitureImages">
                <img src={item.image} alt="" />
              </div>
            )
          })
}
    </div>
    </>
  )
}

export default Furniture
