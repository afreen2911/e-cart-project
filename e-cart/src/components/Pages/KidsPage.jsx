import React from 'react'
import './KidsPage.css'
import {kidsData} from '../data/kids'
import Navbar from '../Navbar'
const KidsPage = () => {
  return (
    <>
    <Navbar/>
    <div className='kidsPageSection'>
      {
        kidsData.map((item)=>{
            return(
                <div className="kidsPageImages">
                    <img src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default KidsPage
