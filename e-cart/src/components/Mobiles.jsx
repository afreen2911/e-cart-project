import React from 'react'
import './Mobiles.css'
import { mobileData } from './data/mobiles'
const Mobiles = () => {
  const images=mobileData.slice(0,5)
  return (
    <>
    <h3>Mobiles</h3>
    <div className='mobilesection'>
      {
        images.map((item)=>{
            return(
                <div className='mobileImages'>
                <img src={item.image}  />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Mobiles
