import React from 'react'
import './Ac.css'
import { acData } from './data/ac'
const Ac = () => {
  const images=acData.slice(0,5)
  return (
    <>
    <h3>AC</h3>
    <div className="acSection">
      {
        images.map((item)=>{
          return(
            <div className="acImages">
              <img src={item.image} alt="" />
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Ac
