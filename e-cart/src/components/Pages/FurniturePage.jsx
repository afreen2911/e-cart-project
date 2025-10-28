import React from 'react'
import './FurniturePage.css'
import {furnitureData} from '../data/furniture'
import Navbar from '../Navbar'
const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    
    <div className='furniturePageSection'>
      {
        
        furnitureData.map((item)=>{
            return(
              <div className="watchItemContainer">
                <div className="furniturePageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3 className='furnitureProductName'>
                  {item.type}
                </h3>
                </div>
                
            )
        })
      }
    </div>
    </>
  )
}

export default FurniturePage
