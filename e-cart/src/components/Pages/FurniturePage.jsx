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
                <div className="furniturePageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default FurniturePage
