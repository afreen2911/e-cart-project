import React from 'react'
import './Men.css'
import { menData } from './data/men'

const Men = () => {
  const images=menData.slice(0,5)
  return (
    <>
    <h3>Men</h3>
    <div className='mensection'>
       {
        images.map((item)=>{
            return(
                <div className='menImages'>
                <img src={item.image}  />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Men
