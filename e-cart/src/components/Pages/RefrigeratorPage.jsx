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
                <div className="fridgePageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default RefrigeratorPage
