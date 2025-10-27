import React from 'react'
import './WatchesPage.css'
import { watchData } from '../data/watch'
import Navbar from '../Navbar'

const WatchesPage = () => {
  return (
    <>
    <Navbar/>
      <div className='WatchesPageSection'>
            {
              watchData.map((item)=>{
                  return(
                      <div className="watchPageImages">
                          <img src={item.image} alt="" />
                      </div>
                  )
              })
            }
          </div>
    </>
  )
}

export default WatchesPage
