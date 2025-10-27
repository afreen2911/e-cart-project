import React from 'react'
import { tabletData } from './data/tablets'
import './Tablet.css'

const Tablet = () => {
  const images=tabletData.slice(0,5)
  return (
    <>
    <h3>Tablets</h3>
    <div className='tabletSection'>
      {
        images.map((item)=>{
            return(
                <div className="tabletImages">
                    <img src={item.image}  />
                </div>

            )
        })
      }
    </div>
    </>
  )
}

export default Tablet
