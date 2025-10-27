import React from 'react'
import './HomeKitchenPage.css'
import {kitchenData} from '../data/kitchen'
import Navbar from '../Navbar'
const HomeKitchenPage = () => {
  return (
    <>
    <Navbar/>
    
    <div className='kitchenPageSection'>
      {
        kitchenData.map((item)=>{
            return(
                <div className="kitchenPageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default HomeKitchenPage
