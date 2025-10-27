import React from 'react'
import './Refrigerators.css'
import { fridgeData } from './data/fridge'
const Refrigeratorrs = () => {
  const images=fridgeData.slice(0,5)
  return (
    <>
    <h3>Refrigerators</h3>
    <div className='fridgeSection'>
      {
        images.map((item)=>{
            return(
                <div className='fridgeImages'>
                <img src={item.image}  />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Refrigeratorrs
