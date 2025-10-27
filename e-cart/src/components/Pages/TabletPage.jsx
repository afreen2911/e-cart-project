import React from 'react'
import { tabletData } from '../data/tablets'
import './TabletPage.css'
import Navbar from '../Navbar'

const TabletPage = () => {
  
  return (
    <>
    <Navbar/>
    <div className='tabletPageSection'>
      {
        tabletData.map((item)=>{
            return(
                <div className="tabletItemContainer">
                  <div className="tabletImageCard">
                    <img src={item.image}  alt=''/>
                  </div>
                    <h3 className="tabletProductName">
                  {item.company}
                </h3>
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default TabletPage
