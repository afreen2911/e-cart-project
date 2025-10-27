import React from 'react'
import { tabletData } from '../data/tablets'
import './TabletPage.css'
import Navbar from '../Navbar'

const TabletPage = () => {
  
  return (
    <>
    <Navbar/>
    <h2>TabletPages</h2>
    <div className='tabletPageSection'>
      {
        tabletData.map((item)=>{
            return(
                <div className="tabletPageImages">
                    <img src={item.image}  />
                </div>

            )
        })
      }
    </div>
    </>
  )
}

export default TabletPage
