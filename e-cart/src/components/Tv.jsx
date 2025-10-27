import React from 'react'
import './Tv.css'
import { tvData } from './data/tv'

const Tv = () => {
  const images=tvData.slice(0,5)
  return (
   <>
   <h3>TV's</h3>
    <div className='tvSection'>
      {
              images.map((item)=>{
                  return(
                      <div className="tvImages">
                          <img src={item.image}  />
                      </div>
      
                  )
              })
            }
    </div>
    </>
  )
}

export default Tv
