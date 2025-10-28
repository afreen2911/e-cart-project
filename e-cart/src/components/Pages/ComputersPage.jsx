import React from 'react'
import './ComputersPage.css'
import { computerData } from '../data/computers'
import Navbar from '../Navbar'

const ComputersPage = () => {
  return (
    <>
    <Navbar/>
    
     <div className='computerPageSection'>
      {
        computerData.map((item)=>{
            return(
              <div className="computerItemContainer">
                <div className="computerPageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3 className='computerProductName'>
                  {item.company}
                  </h3>
              </div>
                
            )
        })
      }
    </div>
    </>
  )
}

export default ComputersPage

