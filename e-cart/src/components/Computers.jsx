import React from 'react'
import './Computers.css'
import { computerData } from './data/computers'
const Computers = () => {
  const images=computerData.slice(0,5)
  return (
    <>
    <h3>Computers</h3>
    <div className="computerSection">
      {
        images.map((item)=>{
          return(
            <div className="computerImages">
              <img src={item.image} alt="" />
            </div>
          )
          
        })
      }
    </div>
    </>
  )
}

export default Computers
