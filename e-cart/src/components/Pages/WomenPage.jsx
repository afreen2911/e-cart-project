import React from 'react'
import './WomenPage.css'
import { womanData } from '../data/woman'; 
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
const WomenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='womenPageSection'>
      {
        womanData.map((item)=>{
            return(
              <div className="womenItemContainer">
                <Link to={`/womenpage/${item.id}`}>
                <div className="womenPageCard">
                    <img src={item.image} alt="" />
                </div>
                </Link>
                
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
