import React from 'react'
import './Kids.css'
import { kidsData } from './data/kids'
const Kids = () => {
  const images=kidsData.slice(0,5)
  return (
    <>
    <h3>Kids</h3>
    <div  className='kidsSection'>
       {
        
         images.map((item)=>{
                  return(
                      <div className='kidsImages'>
                      <img src={item.image}  />
                      </div>
                  )
              })
            }
    </div>
    </>
  )
}

export default Kids
