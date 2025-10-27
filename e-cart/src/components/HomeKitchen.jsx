import React from 'react'
import './HomeKitchen.css'
import { kitchenData } from './data/kitchen'
const HomeKitchen = () => {
  const images=kitchenData.slice(0,5)
  return (
   <>
   <h3>Home&Kitchen</h3>
   <div className='kitchenSection'>
    {
    images.map((item)=>{
      return(
      <div className='kitchenImages'>
        <img src={item.image}  />
      </div>
      )
    })
  }
   </div>
   </>
  )
}

export default HomeKitchen

