import React from 'react'
import './AcPage.css'
import {acData} from '../data/ac'
import Navbar from '../Navbar'

const AcPage = () => {
  return (
    <>
    
    <Navbar/>
    <>
   <div className='acPageSection'>
      {
        acData.map((item)=>{
            return(
              <>
                <div className="acPageImages">
                    <img src={item.image} alt="" />
                </div>
                
                </>
            )
        })
      }
    </div>
    </>
    </>
    
  )
}

export default AcPage
