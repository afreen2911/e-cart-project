import React from 'react'
import './Watches.css'
import { watchData } from './data/watch'

const Watches = () => {
  const images=watchData.slice(0,5)
  return (
    <>
    <h3>Watches</h3>
    <div className="watchSection">
      {
        images.map((item)=>{
          return(
            <div className="watchImages">
              <img src={item.image} alt="" />
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Watches
