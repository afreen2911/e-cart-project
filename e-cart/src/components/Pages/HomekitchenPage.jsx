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
              <div className="kitchenItemContainer">
                <div className="kitchenPageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3>{item.type}</h3>
              </div>
                
            )
        })
      }
    </div>
    </>
  )
}

export default HomeKitchenPage
