import React from 'react'
import './Beauty.css'
import { beautyData } from './data/beauty'

const Beauty = () => {
  const images=beautyData.slice(0,5)
  return (
    <>
    <h3>Beauty</h3>
    <div className="beautySection">
      {
      images.map((item)=>{
        return(
          <div className="beautyImages">
            <img src= {item.image} alt="" />
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Beauty
