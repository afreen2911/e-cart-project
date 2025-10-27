import React from 'react'
import './ComputersPage.css'
import { computerData } from '../data/computers'
import Navbar from '../Navbar'

const ComputersPage = () => {
  return (
    <>
    <Navbar/>
    
     <div className='ComputerPageSection'>
      {
        computerData.map((item)=>{
            return(
                <div className="ComputerPageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default ComputersPage

