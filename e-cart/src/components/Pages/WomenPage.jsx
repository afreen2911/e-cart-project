import React from 'react'
import './WomenPage.css'
import { womanData } from '../data/woman'; 
import Navbar from '../Navbar';

const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='womenPageSection'>
      {
        womanData.map((item)=>{
            return(
              <div className="womenItemContainer">
                <div className="womenPageCard">
                    <img src={item.image} alt="" />
                </div>
                <h3 className='womenProductName'>{item.type}</h3>
              </div>
                
            )
        })
      }
    </div>
    </>
  )
}

export default WomenPage
