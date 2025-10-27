import React from 'react'
import './WomenPage.css'
import { womanData } from '../data/woman'; 
import Navbar from '../Navbar';

const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='womanPageSection'>
      {
        womanData.map((item)=>{
            return(
                <div className="womanPageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default WomenPage
