import React from 'react'
import './RefrigeratorPage.css';
import {fridgeData} from '../data/fridge'
import Navbar from '../Navbar';
const RefrigeratorPage = () => {
  return (
    <>
    <Navbar/>
    <div className='fridgePageSection'>
      {
        fridgeData.map((item)=>{
            return(
              <div className="fridgeItemContainer">
                <div className="fridgePageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3 className='fridgeProductName'>{item.brand}</h3>
              </div>
                
            )
        })
      }
    </div>
    </>
  )
}

export default RefrigeratorPage
