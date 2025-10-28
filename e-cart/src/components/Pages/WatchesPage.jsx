import React from 'react'
import './WatchesPage.css'
import { watchData } from '../data/watch'
import Navbar from '../Navbar'

const WatchesPage = () => {
  return (
    <>
    <Navbar/>
      <div className='watchPageSection'>
            {
              watchData.map((item)=>{
                  return(
                    <div className="watchItemContainer">
                      <div className="watchPageCard">
                          <img src={item.image} alt="" />
                      </div>
                      <h3 className='watchProductName'>{item.brand}</h3>
                    </div>

                      
                  )
              })
            }
          </div>
    </>
  )
}

export default WatchesPage
