import React from 'react'
import './KidsPage.css'
import {kidsData} from '../data/kids'
import Navbar from '../Navbar'
const KidsPage = () => {
  return (
    <>
    <Navbar/>
    <div className='kidsPageSection'>
      {
        kidsData.map((item)=>{
            return(
                <div className="kidsItemContainer">
                  <div className="kidsPageCard">
                    <img src={item.image} alt="" />
                  </div>
                  <h3 className='kidsProductName'>{item.product}
                  </h3>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default KidsPage
